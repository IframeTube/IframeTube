// IframeTube - all rights reserved.
// copyright (c) 2026
// you may copy this project and modify it for personal use only.
// you may not distribute this project or any modified versions of it without explicit permission from the author.

// view the full source code and how this works here: https://github.com/IframeTube/IframeTube
// if you encounter any issues, please report them here: https://github.com/IframeTube/IframeTube/issues


// wraps everything inside an IIFE (this avoids some edge cases)
(function () {
    'use strict'; // better for debugging

    // DOMPurify, this is used to safely sanitize HTML, official repository: https://github.com/cure53/DOMPurify
    var Xt = Object.defineProperty; var c = (r, o) => Xt(r, "name", { value: o, configurable: !0 }); var { entries: gt, setPrototypeOf: ft, isFrozen: jt, getPrototypeOf: Vt, getOwnPropertyDescriptor: $t } = Object, { freeze: R, seal: b, create: ve } = Object, { apply: ke, construct: Ue } = typeof Reflect < "u" && Reflect; R || (R = c(function (o) { return o }, "freeze")); b || (b = c(function (o) { return o }, "seal")); ke || (ke = c(function (o, l) { for (var a = arguments.length, f = new Array(a > 2 ? a - 2 : 0), y = 2; y < a; y++)f[y - 2] = arguments[y]; return o.apply(l, f) }, "apply")); Ue || (Ue = c(function (o) { for (var l = arguments.length, a = new Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++)a[f - 1] = arguments[f]; return new o(...a) }, "construct")); var fe = O(Array.prototype.forEach), qt = O(Array.prototype.lastIndexOf), ut = O(Array.prototype.pop), K = O(Array.prototype.push), Kt = O(Array.prototype.splice), me = O(String.prototype.toLowerCase), Ie = O(String.prototype.toString), Ce = O(String.prototype.match), Z = O(String.prototype.replace), Zt = O(String.prototype.indexOf), Jt = O(String.prototype.trim), D = O(Object.prototype.hasOwnProperty), S = O(RegExp.prototype.test), J = Qt(TypeError); function O(r) { return function (o) { o instanceof RegExp && (o.lastIndex = 0); for (var l = arguments.length, a = new Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++)a[f - 1] = arguments[f]; return ke(r, o, a) } } c(O, "unapply"); function Qt(r) { return function () { for (var o = arguments.length, l = new Array(o), a = 0; a < o; a++)l[a] = arguments[a]; return Ue(r, l) } } c(Qt, "unconstruct"); function s(r, o) { let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : me; ft && ft(r, null); let a = o.length; for (; a--;) { let f = o[a]; if (typeof f == "string") { let y = l(f); y !== f && (jt(o) || (o[a] = y), f = y) } r[f] = !0 } return r } c(s, "addToSet"); function en(r) { for (let o = 0; o < r.length; o++)D(r, o) || (r[o] = null); return r } c(en, "cleanArray"); function w(r) { let o = ve(null); for (let [l, a] of gt(r)) D(r, l) && (Array.isArray(a) ? o[l] = en(a) : a && typeof a == "object" && a.constructor === Object ? o[l] = w(a) : o[l] = a); return o } c(w, "clone"); function Q(r, o) { for (; r !== null;) { let a = $t(r, o); if (a) { if (a.get) return O(a.get); if (typeof a.value == "function") return O(a.value) } r = Vt(r) } function l() { return null } return c(l, "fallbackValue"), l } c(Q, "lookupGetter"); var mt = R(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Me = R(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), we = R(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), tn = R(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xe = R(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), nn = R(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), pt = R(["#text"]), dt = R(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Pe = R(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Tt = R(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ue = R(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), on = b(/\{\{[\w\W]*|[\w\W]*\}\}/gm), an = b(/<%[\w\W]*|[\w\W]*%>/gm), rn = b(/\$\{[\w\W]*/gm), sn = b(/^data-[\-\w.\u00B7-\uFFFF]+$/), ln = b(/^aria-[\-\w]+$/), ht = b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), cn = b(/^(?:\w+script|data):/i), fn = b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), At = b(/^html$/i), un = b(/^[a-z][.\w]*(-[.\w]+)+$/i), Et = Object.freeze({ __proto__: null, ARIA_ATTR: ln, ATTR_WHITESPACE: fn, CUSTOM_ELEMENT: un, DATA_ATTR: sn, DOCTYPE_NAME: At, ERB_EXPR: an, IS_ALLOWED_URI: ht, IS_SCRIPT_OR_DATA: cn, MUSTACHE_EXPR: on, TMPLIT_EXPR: rn }), ee = { element: 1, attribute: 2, text: 3, cdataSection: 4, entityReference: 5, entityNode: 6, progressingInstruction: 7, comment: 8, document: 9, documentType: 10, documentFragment: 11, notation: 12 }, mn = c(function () { return typeof window > "u" ? null : window }, "getGlobal"), pn = c(function (o, l) { if (typeof o != "object" || typeof o.createPolicy != "function") return null; let a = null, f = "data-tt-policy-suffix"; l && l.hasAttribute(f) && (a = l.getAttribute(f)); let y = "dompurify" + (a ? "#" + a : ""); try { return o.createPolicy(y, { createHTML(v) { return v }, createScriptURL(v) { return v } }) } catch { return console.warn("TrustedTypes policy " + y + " could not be created."), null } }, "_createTrustedTypesPolicy"), _t = c(function () { return { afterSanitizeAttributes: [], afterSanitizeElements: [], afterSanitizeShadowDOM: [], beforeSanitizeAttributes: [], beforeSanitizeElements: [], beforeSanitizeShadowDOM: [], uponSanitizeAttribute: [], uponSanitizeElement: [], uponSanitizeShadowNode: [] } }, "_createHooksMap"); function St() { let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mn(), o = c(i => St(i), "DOMPurify"); if (o.version = "3.3.0", o.removed = [], !r || !r.document || r.document.nodeType !== ee.document || !r.Element) return o.isSupported = !1, o; let { document: l } = r, a = l, f = a.currentScript, { DocumentFragment: y, HTMLTemplateElement: v, Node: pe, Element: Fe, NodeFilter: Y, NamedNodeMap: Rt = r.NamedNodeMap || r.MozNamedAttrMap, HTMLFormElement: Ot, DOMParser: yt, trustedTypes: te } = r, X = Fe.prototype, Lt = Q(X, "cloneNode"), bt = Q(X, "remove"), Dt = Q(X, "nextSibling"), Nt = Q(X, "childNodes"), ne = Q(X, "parentNode"); if (typeof v == "function") { let i = l.createElement("template"); i.content && i.content.ownerDocument && (l = i.content.ownerDocument) } let h, j = "", { implementation: de, createNodeIterator: It, createDocumentFragment: Ct, getElementsByTagName: Mt } = l, { importNode: wt } = a, A = _t(); o.isSupported = typeof gt == "function" && typeof ne == "function" && de && de.createHTMLDocument !== void 0; let { MUSTACHE_EXPR: Te, ERB_EXPR: Ee, TMPLIT_EXPR: _e, DATA_ATTR: xt, ARIA_ATTR: Pt, IS_SCRIPT_OR_DATA: vt, ATTR_WHITESPACE: He, CUSTOM_ELEMENT: kt } = Et, { IS_ALLOWED_URI: ze } = Et, d = null, Ge = s({}, [...mt, ...Me, ...we, ...xe, ...pt]), E = null, We = s({}, [...dt, ...Pe, ...Tt, ...ue]), m = Object.seal(ve(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), V = null, ge = null, k = Object.seal(ve(null, { tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeCheck: { writable: !0, configurable: !1, enumerable: !0, value: null } })), Be = !0, he = !0, Ye = !1, Xe = !0, U = !1, oe = !0, x = !1, Ae = !1, Se = !1, F = !1, ie = !1, ae = !1, je = !0, Ve = !1, Ut = "user-content-", Re = !0, $ = !1, H = {}, z = null, $e = s({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), qe = null, Ke = s({}, ["audio", "video", "img", "source", "image", "track"]), Oe = null, Ze = s({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), re = "http://www.w3.org/1998/Math/MathML", se = "http://www.w3.org/2000/svg", I = "http://www.w3.org/1999/xhtml", G = I, ye = !1, Le = null, Ft = s({}, [re, se, I], Ie), le = s({}, ["mi", "mo", "mn", "ms", "mtext"]), ce = s({}, ["annotation-xml"]), Ht = s({}, ["title", "style", "font", "a", "script"]), q = null, zt = ["application/xhtml+xml", "text/html"], Gt = "text/html", T = null, W = null, Wt = l.createElement("form"), Je = c(function (e) { return e instanceof RegExp || e instanceof Function }, "isRegexOrFunction"), be = c(function () { let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; if (!(W && W === e)) { if ((!e || typeof e != "object") && (e = {}), e = w(e), q = zt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Gt : e.PARSER_MEDIA_TYPE, T = q === "application/xhtml+xml" ? Ie : me, d = D(e, "ALLOWED_TAGS") ? s({}, e.ALLOWED_TAGS, T) : Ge, E = D(e, "ALLOWED_ATTR") ? s({}, e.ALLOWED_ATTR, T) : We, Le = D(e, "ALLOWED_NAMESPACES") ? s({}, e.ALLOWED_NAMESPACES, Ie) : Ft, Oe = D(e, "ADD_URI_SAFE_ATTR") ? s(w(Ze), e.ADD_URI_SAFE_ATTR, T) : Ze, qe = D(e, "ADD_DATA_URI_TAGS") ? s(w(Ke), e.ADD_DATA_URI_TAGS, T) : Ke, z = D(e, "FORBID_CONTENTS") ? s({}, e.FORBID_CONTENTS, T) : $e, V = D(e, "FORBID_TAGS") ? s({}, e.FORBID_TAGS, T) : w({}), ge = D(e, "FORBID_ATTR") ? s({}, e.FORBID_ATTR, T) : w({}), H = D(e, "USE_PROFILES") ? e.USE_PROFILES : !1, Be = e.ALLOW_ARIA_ATTR !== !1, he = e.ALLOW_DATA_ATTR !== !1, Ye = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Xe = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, U = e.SAFE_FOR_TEMPLATES || !1, oe = e.SAFE_FOR_XML !== !1, x = e.WHOLE_DOCUMENT || !1, F = e.RETURN_DOM || !1, ie = e.RETURN_DOM_FRAGMENT || !1, ae = e.RETURN_TRUSTED_TYPE || !1, Se = e.FORCE_BODY || !1, je = e.SANITIZE_DOM !== !1, Ve = e.SANITIZE_NAMED_PROPS || !1, Re = e.KEEP_CONTENT !== !1, $ = e.IN_PLACE || !1, ze = e.ALLOWED_URI_REGEXP || ht, G = e.NAMESPACE || I, le = e.MATHML_TEXT_INTEGRATION_POINTS || le, ce = e.HTML_INTEGRATION_POINTS || ce, m = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Je(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (m.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Je(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (m.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (m.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), U && (he = !1), ie && (F = !0), H && (d = s({}, pt), E = [], H.html === !0 && (s(d, mt), s(E, dt)), H.svg === !0 && (s(d, Me), s(E, Pe), s(E, ue)), H.svgFilters === !0 && (s(d, we), s(E, Pe), s(E, ue)), H.mathMl === !0 && (s(d, xe), s(E, Tt), s(E, ue))), e.ADD_TAGS && (typeof e.ADD_TAGS == "function" ? k.tagCheck = e.ADD_TAGS : (d === Ge && (d = w(d)), s(d, e.ADD_TAGS, T))), e.ADD_ATTR && (typeof e.ADD_ATTR == "function" ? k.attributeCheck = e.ADD_ATTR : (E === We && (E = w(E)), s(E, e.ADD_ATTR, T))), e.ADD_URI_SAFE_ATTR && s(Oe, e.ADD_URI_SAFE_ATTR, T), e.FORBID_CONTENTS && (z === $e && (z = w(z)), s(z, e.FORBID_CONTENTS, T)), Re && (d["#text"] = !0), x && s(d, ["html", "head", "body"]), d.table && (s(d, ["tbody"]), delete V.tbody), e.TRUSTED_TYPES_POLICY) { if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw J('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'); if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw J('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'); h = e.TRUSTED_TYPES_POLICY, j = h.createHTML("") } else h === void 0 && (h = pn(te, f)), h !== null && typeof j == "string" && (j = h.createHTML("")); R && R(e), W = e } }, "_parseConfig"), Qe = s({}, [...Me, ...we, ...tn]), et = s({}, [...xe, ...nn]), Bt = c(function (e) { let t = ne(e); (!t || !t.tagName) && (t = { namespaceURI: G, tagName: "template" }); let n = me(e.tagName), u = me(t.tagName); return Le[e.namespaceURI] ? e.namespaceURI === se ? t.namespaceURI === I ? n === "svg" : t.namespaceURI === re ? n === "svg" && (u === "annotation-xml" || le[u]) : !!Qe[n] : e.namespaceURI === re ? t.namespaceURI === I ? n === "math" : t.namespaceURI === se ? n === "math" && ce[u] : !!et[n] : e.namespaceURI === I ? t.namespaceURI === se && !ce[u] || t.namespaceURI === re && !le[u] ? !1 : !et[n] && (Ht[n] || !Qe[n]) : !!(q === "application/xhtml+xml" && Le[e.namespaceURI]) : !1 }, "_checkValidNamespace"), N = c(function (e) { K(o.removed, { element: e }); try { ne(e).removeChild(e) } catch { bt(e) } }, "_forceRemove"), P = c(function (e, t) { try { K(o.removed, { attribute: t.getAttributeNode(e), from: t }) } catch { K(o.removed, { attribute: null, from: t }) } if (t.removeAttribute(e), e === "is") if (F || ie) try { N(t) } catch { } else try { t.setAttribute(e, "") } catch { } }, "_removeAttribute"), tt = c(function (e) { let t = null, n = null; if (Se) e = "<remove></remove>" + e; else { let p = Ce(e, /^[\r\n\t ]+/); n = p && p[0] } q === "application/xhtml+xml" && G === I && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>"); let u = h ? h.createHTML(e) : e; if (G === I) try { t = new yt().parseFromString(u, q) } catch { } if (!t || !t.documentElement) { t = de.createDocument(G, "template", null); try { t.documentElement.innerHTML = ye ? j : u } catch { } } let g = t.body || t.documentElement; return e && n && g.insertBefore(l.createTextNode(n), g.childNodes[0] || null), G === I ? Mt.call(t, x ? "html" : "body")[0] : x ? t.documentElement : g }, "_initDocument"), nt = c(function (e) { return It.call(e.ownerDocument || e, e, Y.SHOW_ELEMENT | Y.SHOW_COMMENT | Y.SHOW_TEXT | Y.SHOW_PROCESSING_INSTRUCTION | Y.SHOW_CDATA_SECTION, null) }, "_createNodeIterator"), De = c(function (e) { return e instanceof Ot && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof Rt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function") }, "_isClobbered"), ot = c(function (e) { return typeof pe == "function" && e instanceof pe }, "_isNode"); function C(i, e, t) { fe(i, n => { n.call(o, e, t, W) }) } c(C, "_executeHooks"); let it = c(function (e) { let t = null; if (C(A.beforeSanitizeElements, e, null), De(e)) return N(e), !0; let n = T(e.nodeName); if (C(A.uponSanitizeElement, e, { tagName: n, allowedTags: d }), oe && e.hasChildNodes() && !ot(e.firstElementChild) && S(/<[/\w!]/g, e.innerHTML) && S(/<[/\w!]/g, e.textContent) || e.nodeType === ee.progressingInstruction || oe && e.nodeType === ee.comment && S(/<[/\w]/g, e.data)) return N(e), !0; if (!(k.tagCheck instanceof Function && k.tagCheck(n)) && (!d[n] || V[n])) { if (!V[n] && rt(n) && (m.tagNameCheck instanceof RegExp && S(m.tagNameCheck, n) || m.tagNameCheck instanceof Function && m.tagNameCheck(n))) return !1; if (Re && !z[n]) { let u = ne(e) || e.parentNode, g = Nt(e) || e.childNodes; if (g && u) { let p = g.length; for (let L = p - 1; L >= 0; --L) { let M = Lt(g[L], !0); M.__removalCount = (e.__removalCount || 0) + 1, u.insertBefore(M, Dt(e)) } } } return N(e), !0 } return e instanceof Fe && !Bt(e) || (n === "noscript" || n === "noembed" || n === "noframes") && S(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (U && e.nodeType === ee.text && (t = e.textContent, fe([Te, Ee, _e], u => { t = Z(t, u, " ") }), e.textContent !== t && (K(o.removed, { element: e.cloneNode() }), e.textContent = t)), C(A.afterSanitizeElements, e, null), !1) }, "_sanitizeElements"), at = c(function (e, t, n) { if (je && (t === "id" || t === "name") && (n in l || n in Wt)) return !1; if (!(he && !ge[t] && S(xt, t))) { if (!(Be && S(Pt, t))) { if (!(k.attributeCheck instanceof Function && k.attributeCheck(t, e))) { if (!E[t] || ge[t]) { if (!(rt(e) && (m.tagNameCheck instanceof RegExp && S(m.tagNameCheck, e) || m.tagNameCheck instanceof Function && m.tagNameCheck(e)) && (m.attributeNameCheck instanceof RegExp && S(m.attributeNameCheck, t) || m.attributeNameCheck instanceof Function && m.attributeNameCheck(t, e)) || t === "is" && m.allowCustomizedBuiltInElements && (m.tagNameCheck instanceof RegExp && S(m.tagNameCheck, n) || m.tagNameCheck instanceof Function && m.tagNameCheck(n)))) return !1 } else if (!Oe[t]) { if (!S(ze, Z(n, He, ""))) { if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Zt(n, "data:") === 0 && qe[e])) { if (!(Ye && !S(vt, Z(n, He, "")))) { if (n) return !1 } } } } } } } return !0 }, "_isValidAttribute"), rt = c(function (e) { return e !== "annotation-xml" && Ce(e, kt) }, "_isBasicCustomElement"), st = c(function (e) { C(A.beforeSanitizeAttributes, e, null); let { attributes: t } = e; if (!t || De(e)) return; let n = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: E, forceKeepAttr: void 0 }, u = t.length; for (; u--;) { let g = t[u], { name: p, namespaceURI: L, value: M } = g, B = T(p), Ne = M, _ = p === "value" ? Ne : Jt(Ne); if (n.attrName = B, n.attrValue = _, n.keepAttr = !0, n.forceKeepAttr = void 0, C(A.uponSanitizeAttribute, e, n), _ = n.attrValue, Ve && (B === "id" || B === "name") && (P(p, e), _ = Ut + _), oe && S(/((--!?|])>)|<\/(style|title|textarea)/i, _)) { P(p, e); continue } if (B === "attributename" && Ce(_, "href")) { P(p, e); continue } if (n.forceKeepAttr) continue; if (!n.keepAttr) { P(p, e); continue } if (!Xe && S(/\/>/i, _)) { P(p, e); continue } U && fe([Te, Ee, _e], ct => { _ = Z(_, ct, " ") }); let lt = T(e.nodeName); if (!at(lt, B, _)) { P(p, e); continue } if (h && typeof te == "object" && typeof te.getAttributeType == "function" && !L) switch (te.getAttributeType(lt, B)) { case "TrustedHTML": { _ = h.createHTML(_); break } case "TrustedScriptURL": { _ = h.createScriptURL(_); break } }if (_ !== Ne) try { L ? e.setAttributeNS(L, p, _) : e.setAttribute(p, _), De(e) ? N(e) : ut(o.removed) } catch { P(p, e) } } C(A.afterSanitizeAttributes, e, null) }, "_sanitizeAttributes"), Yt = c(function i(e) { let t = null, n = nt(e); for (C(A.beforeSanitizeShadowDOM, e, null); t = n.nextNode();)C(A.uponSanitizeShadowNode, t, null), it(t), st(t), t.content instanceof y && i(t.content); C(A.afterSanitizeShadowDOM, e, null) }, "_sanitizeShadowDOM"); return o.sanitize = function (i) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = null, n = null, u = null, g = null; if (ye = !i, ye && (i = "<!-->"), typeof i != "string" && !ot(i)) if (typeof i.toString == "function") { if (i = i.toString(), typeof i != "string") throw J("dirty is not a string, aborting") } else throw J("toString is not a function"); if (!o.isSupported) return i; if (Ae || be(e), o.removed = [], typeof i == "string" && ($ = !1), $) { if (i.nodeName) { let M = T(i.nodeName); if (!d[M] || V[M]) throw J("root node is forbidden and cannot be sanitized in-place") } } else if (i instanceof pe) t = tt("<!---->"), n = t.ownerDocument.importNode(i, !0), n.nodeType === ee.element && n.nodeName === "BODY" || n.nodeName === "HTML" ? t = n : t.appendChild(n); else { if (!F && !U && !x && i.indexOf("<") === -1) return h && ae ? h.createHTML(i) : i; if (t = tt(i), !t) return F ? null : ae ? j : "" } t && Se && N(t.firstChild); let p = nt($ ? i : t); for (; u = p.nextNode();)it(u), st(u), u.content instanceof y && Yt(u.content); if ($) return i; if (F) { if (ie) for (g = Ct.call(t.ownerDocument); t.firstChild;)g.appendChild(t.firstChild); else g = t; return (E.shadowroot || E.shadowrootmode) && (g = wt.call(a, g, !0)), g } let L = x ? t.outerHTML : t.innerHTML; return x && d["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && S(At, t.ownerDocument.doctype.name) && (L = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>` + L), U && fe([Te, Ee, _e], M => { L = Z(L, M, " ") }), h && ae ? h.createHTML(L) : L }, o.setConfig = function () { let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; be(i), Ae = !0 }, o.clearConfig = function () { W = null, Ae = !1 }, o.isValidAttribute = function (i, e, t) { W || be({}); let n = T(i), u = T(e); return at(n, u, t) }, o.addHook = function (i, e) { typeof e == "function" && K(A[i], e) }, o.removeHook = function (i, e) { if (e !== void 0) { let t = qt(A[i], e); return t === -1 ? void 0 : Kt(A[i], t, 1)[0] } return ut(A[i]) }, o.removeHooks = function (i) { A[i] = [] }, o.removeAllHooks = function () { A = _t() }, o } c(St, "createDOMPurify"); var DOMPurify = St();

    // trusted types is a browser security feature which alllows you to safely inject HTML, so no dangerous user input is taken as executable code
    // while I do not take any user input, this is required as Youtube uses trusted types by default

    // definy a trusted types variable
    let IframeTubeTT = false;
    // if trusted types is supported on the page (e.g. not all browsers support them)
    if (window.trustedTypes && window.trustedTypes.createPolicy) {
        // create a custom trusted types policy
        IframeTubeTT = window.trustedTypes.createPolicy('IframeTubePolicy', {
            // sanitize the HTML, and return it as a trusted types string
            createHTML: (input) => DOMPurify.sanitize(input, { RETURN_TRUSTED_TYPE: true }),
        });
    }

    /*
    -------------- IframeTube helper functions ----------------------------
    */

    // helper to set inner html on an element
    function IframeTube_setInnerHTML(element, html) {
        // if trusted types exist, use them to create html
        if (IframeTubeTT) {
            element.innerHTML = IframeTubeTT.createHTML(html);
        }
        // otherwise, just set the html normally
        else {
            element.innerHTML = html;
        }
    }

    // helper to insert adjacent html on an element
    function IframeTube_insertAdjacentHTML(element, position, html) {
        // if trusted types exist, use them to create html
        if (IframeTubeTT) {
            element.insertAdjacentHTML(position, IframeTubeTT.createHTML(html));
        }
        // otherwise, just set the html normally
        else {
            element.insertAdjacentHTML(position, html);
        }
    }

    // helper to extract parameters from the embedded iframe URL
    function IframeTube_setupExtractParams() {
        let query = document.location.href.split('?')[1];
        let vars = query.split('&');
        let params = {};
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split('=');
            if (pair[0]) params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return params;
    }

    /*
    -------------- IframeTube global variables ----------------------------
    */

    // iframe API reference
    let IframeTube_iframe_api = false;

    // indicates if autoplay is on or off
    let IframeTube_autoPlay = false;

    // indicates if we are on a playlist
    let IframeTube_playlist = false;

    // exposes the theateter icons globally
    let IframeTube_theater_theaterIcon = false;
    let IframeTube_theater_defaultIcon = false;

    // exposes the autoplay tooltips globally
    let IframeTube_autoplay_enabledTooltip = false;
    let IframeTube_autoplay_disabledTooltip = false;

    // setups the extract params function
    let IframeTube_extractParams = IframeTube_setupExtractParams();

    /*
    -------------- Embedded player functions ----------------------------
    */

    // listen for messages from the proxy iframe
    function IframeTube_postMessageListener(message) {
        // if the message is not valid, do not proceed
        if (typeof message.data !== 'string') {
            return;
        }

        // shortcuts from the top window that are passed to the video
        else if (message.data.startsWith('IframeTube_shortcut_')) {
            // get the video element
            let video = document.querySelector('video');
            // if it exists
            if (video) {
                // get the message information

                let parts = message.data.split('_'); // split it by '_'
                let eventType = parts[2]; // event type
                let key = parts[3]; // event key
                let shiftKey = parts[4] === 'true'; // if we held the shift key
                let code = parts[5]; // key code

                // if the key is the spacebar
                if (key === ' ') {
                    // focus the video element without scrolling to it
                    video.focus({ preventScroll: true });
                    // dispatch the space shortcut to the video element
                    video.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }));
                }

                // otherwise, dispatch the shortcut without focusing the video
                else {
                    let keyboardEvent = new KeyboardEvent(eventType, {
                        key: key,
                        keyCode: parseFloat(code),
                        shiftKey: shiftKey,
                        ctrlKey: false,
                        altKey: false,
                        metaKey: false,
                        bubbles: true,
                        cancelable: true,
                    });
                    video.dispatchEvent(keyboardEvent);
                }
            }
        }

        // load the video via the iframe api, this does NOT reload the embedded iframe
        else if (message.data.startsWith('IframeTube_api_')) {

            // get the data from the message
            let data = message.data.split('|'); // split the message by '|'
            let videoId = data[0].replace('IframeTube_api_', ''); // get the video ID
            let startTime = parseFloat(data[1].replace('&start=', '')); // get the start time without the &start parameter

            // call the function to load the video by ID and start time
            IframeTube_api_loadVideoById(videoId, startTime);
        }

        // seek to a specific time in the video
        else if (message.data.startsWith('IframeTube_seekTo_')) {
            let data = message.data.split('IframeTube_seekTo_')[1];
            let time = parseFloat(data);
            // call the function to seek to that time
            IframeTube_video_seekTo(time);
        }

        // set the theater attribute on the theater button
        else if (message.data.startsWith('IframeTube_theaterButtonAttribute_')) {
            let data = message.data.replace('IframeTube_theaterButtonAttribute_', '');
            // call the function to set it
            IframeTube_theaterButtonAttribute(data);
        }

        // set the theater icon
        else if (message.data === 'IframeTube_setTheaterIcon') {
            IframeTube_setTheaterIcon('theaterIcon');
        }

        // set the default theater icon
        else if (message.data === 'IframeTube_setDefaultIcon') {
            IframeTube_setTheaterIcon('defaultIcon');
        }

        // set the copied auto play attributes
        else if (message.data.startsWith('IframeTube_setAutoplayAttributes_')) {
            let data = message.data.replace('IframeTube_setAutoplayAttributes_', '');
            let parts = data.split('|');
            // expose the globally
            IframeTube_autoplay_enabledTooltip = parts[0];
            IframeTube_autoplay_disabledTooltip = parts[1];
        }

        // enable the previous button in the embedded player
        else if (message.data === 'IframeTube_enablePrevButton') {
            // also update the playlist flag to true
            IframeTube_playlist = true;
            IframeTube_enablePrevButton();
        }

        // disable the previous button in the embedded player
        else if (message.data === 'IframeTube_disablePrevButton') {
            // also update the playlist flag to false
            IframeTube_playlist = false;
            IframeTube_disablePrevButton();
        }

        // set the next video preview attributes on the next button
        else if (message.data.startsWith('IframeTube_nextVideoPreview_')) {
            // extract the attributes from the post message
            let data = JSON.parse(message.data.replace('IframeTube_nextVideoPreview_', ''));
            let shortcutTitle = data.shortcutTitle;
            let videoTitle = data.videoTitle;
            let videoThumbnail = data.videoThumbnail;
            // call the function
            IframeTube_nextVideoPreview(shortcutTitle, videoTitle, videoThumbnail);
        }

        // set the previous video preview attributes on the previous button
        else if (message.data.startsWith('IframeTube_prevVideoPreview_')) {
            let data = JSON.parse(message.data.replace('IframeTube_prevVideoPreview_', ''));
            // extract the attributes from the post message
            let shortcutTitle = data.shortcutTitle;
            let videoTitle = data.videoTitle;
            let videoThumbnail = data.videoThumbnail;
            // call the function
            IframeTube_prevVideoPreview(shortcutTitle, videoTitle, videoThumbnail);
        }

        // mute and pause the embedded player
        else if (message.data === 'IframeTube_stopPlayback') {
            IframeTube_video_pause();
            IframTube_video_mute();
        }
        // play and unmute the embedded player (currently unused)
        else if (message.data === 'IframeTube_resumePlayback') {
            IframeTube_video_play();
            IframeTube_video_unmute();
        }
    }

    // get the current time, round it, and send it to the main player
    function IframeTube_syncMainPlayer() {

        // refetch the iframe api
        IframeTube_iframe_api = document.getElementById('movie_player')

        // make sure it exists, and get current time is available
        if (IframeTube_iframe_api && IframeTube_iframe_api.getCurrentTime) {

            // get the current time
            let currentTime = IframeTube_iframe_api.getCurrentTime();

            // round it
            currentTime = Math.round(currentTime);

            // sent it to the top window (this is where the main player is)
            window.top.postMessage('IframeTube_syncPlayer_' + currentTime, '*');
        }
    }

    // fix end screen links (so the open in the same window, or via SPA)
    function IframeTube_endScreenLinks() {
        // select all the info and endscreen cards that are NOT fixed
        let endScreenLinks = document.querySelectorAll('.ytp-ce-covering-overlay:not(.IframeTube_link), .ytp-videowall-still:not(.IframeTube_link)');
        // loop through all of them
        endScreenLinks.forEach(link => {
            // add an event listener for click
            link.addEventListener('click', (e) => {
                // prevent the default browser and Youtube listeners action
                e.preventDefault();
                e.stopImmediatePropagation();

                // extract the link
                let url = link.getAttribute('href');
                // send it to the top window
                window.top.postMessage('IframeTube_endScreen_' + url, '*');

            }, true);
            // prevent default action for mousedown
            link.addEventListener('mousedown', (event) => {
                event.preventDefault();
                event.stopImmediatePropagation();
            }, true);

            // prevent default action for mouseup
            link.addEventListener('mouseup', (event) => {
                event.preventDefault();
                event.stopImmediatePropagation();
            }, true);

            // mark it as fixed
            link.classList.add('IframeTube_link');
        });
    }

    // hide the embedded player’s end screen
    let IframeTube_hideEndScreen_timeout = false;
    function IframeTube_hideEndScreen() {
        let player = document.querySelector('.html5-video-player'); // get the player
        let endScreen = player.querySelector('.html5-endscreen'); // get the end screen inside the player
        // if they both exist
        if (player && endScreen) {
            // and if the end screen does not contain the IframeTube_hideEndScreen class, add it
            if (endScreen && !endScreen.classList.contains('IframeTube_hideEndScreen')) {
                endScreen.classList.add('IframeTube_hideEndScreen');;
            }
        }
        // otheriwse, retry in 100ms until they both exist
        else {
            clearTimeout(IframeTube_hideEndScreen_timeout);
            IframeTube_hideEndScreen_timeout = setTimeout(IframeTube_hideEndScreen, 100);
            return;
        }
    }

    // show the embedded player’s end screen
    let IframeTube_showEndScreen_timeout = false;
    function IframeTube_showEndScreen() {
        let player = document.querySelector('.html5-video-player'); // get the player
        let endScreen = player.querySelector('.html5-endscreen'); // get the end screen inside the player
        // if they both exist
        if (player && endScreen) {
            // and if the end screen does not contain the IframeTube_hideEndScreen class, add it
            if (endScreen && endScreen.classList.contains('IframeTube_hideEndScreen')) {
                endScreen.classList.remove('IframeTube_hideEndScreen');
            }
        }
        // otheriwse, retry in 100ms until they both exist
        else {
            clearTimeout(IframeTube_showEndScreen_timeout);
            IframeTube_showEndScreen_timeout = setTimeout(IframeTube_showEndScreen, 100);
            return;
        }
    }

    // injects custom CSS to make the player look like the native one
    function IframeTube_player_style() {
        let style = document.createElement('style');
        style.textContent = `

        /* hides unwanted elements */
        .ytp-small-redirect,
        .ytp-related-on-error-overlay,
        .ytp-error-content-wrap-subreason > div,
        .ytp-error ~ .ytp-chrome-top,
        .ytp-error ~ .ytp-chrome-bottom,
        .ytp-info-panel-preview,
        .ytp-paid-content-overlay,
        .ytp-ad-progress-list,
        .ytp-cued-thumbnail-overlay,
        .ytp-endscreen-previous,
        .ytp-show-cards-title,
        .ytp-endscreen-next,
        .ytp-gradient-top,
        .ytp-pause-overlay,
        .ytp-youtube-button,
        .ytp-generic-popup,
        .ytp-impression-link {
            display: none !important;
        }

        /* fixes a big gab between the top of the player and the end screen */
        .html5-endscreen {
            top: 0 !important;
        }

        /* hides the end screen if it contains the 'IframeTube_hideEndScreen' class */
        .html5-endscreen.IframeTube_hideEndScreen {
            display: none !important;
        }

        /* hides the Youtube tooltip if it is empty, this prevents the native tooltip showing on the theater button */
        .ytp-tooltip:has(span.ytp-tooltip-text:empty) {
            display: none !important;
        }

        /* enables the 'Theater' button */
        .ytp-size-button {
            display: inline-block !important;
        }

        /* enables the 'Picture In Picture button' */
        .ytp-pip-button {
            display: inline-block !important;
        }

        /* enables the 'Next Button' for all videos and forces cursor to be a pointer */
        .ytp-next-button {
            display: block !important;
            opacity: 1 !important;
            cursor: pointer !important;
        }

        /* enables the 'Previous Button' for playlist videos if it contains the 'IframeTube_enabled' class */
        .ytp-prev-button.IframeTube_enabled {
            display: block !important;
            opacity: 1 !important;
            cursor: pointer !important;
        }
            
        /* makes the position relative for absolute positioning of the tooltip */
        #IframeTube_autoplayButton {
            position: relative;
            overflow: visible;
        }

        /* styles our custom tooltip for the autoplay button */
        #IframeTube_autoplayButton .ytp-autonav-toggle-button.IframeTube_visible::before {
        /* mirrors native Youtube attributes to make it look as similar as possible */
			pointer-events: none;
			opacity: 0;
			position: absolute;
			top: -49px;
			left: 50%;
			transform: translateX(-50%);
			background: rgba(28, 28, 28, 0.9);
			color: #ffffff;
			border-radius: 4px;
			font-weight: 500;
			font-size: 12.98px;
			padding-left: 9px;
			padding-right: 9px;
			padding-bottom: 0;
			height: 25px;
			box-sizing: border-box;
			line-height: 25px;
			font-family: "YouTube Noto", Roboto, Arial, sans-serif;
			white-space: nowrap;
            content: attr(data-label);
        }

        /* shows the tooltip on hover and on tab navigation */
        #IframeTube_autoplayButton:focus-visible .ytp-autonav-toggle-button::before,
        #IframeTube_autoplayButton:hover .ytp-autonav-toggle-button::before {
            opacity: 1;
        }

        /* makes the position relative for absolute positioning of the tooltip */
        .ytp-size-button {
            position: relative !important;
            overflow: visible !important;
        }

        /* style our custom tooltip for the theater button (mirrors the native Youtube attributes to make it look as similar as possible) */
        .ytp-size-button.IframeTube_visible::before {
			pointer-events: none;
			opacity: 0;
			position: absolute;
			top: -35px;
			left: 50%;
			transform: translateX(-50%);
			background: rgba(28, 28, 28, 0.9);
			color: #ffffff;
			border-radius: 4px;
			font-weight: 500;
			font-size: 12.98px;
			padding-left: 9px;
			padding-right: 9px;
			padding-bottom: 0;
			height: 25px;
			box-sizing: border-box;
			line-height: 25px;
			font-family: "YouTube Noto", Roboto, Arial, sans-serif;
			white-space: nowrap;
            content: attr(data-label);
        }

        /* shows the tooltip on hover and on tab navigation */
        .ytp-size-button:focus-visible::before,
        .ytp-size-button:hover::before {
            opacity: 1;
        }

        /* when the button contains the 'long-tooltip' class, move it 23 pixels to the left from its center position (prevents longer tooltips from not fully fitting) */
        .ytp-size-button.long-tooltip::before {
            transform: translateX(calc(-50% - 23px));
        }

        /* hides the theater and PIP button in full screen (native’s player behavior) */
        :fullscreen .ytp-pip-button,
        :fullscreen .ytp-size-button {
            pointer-events: none !important;
            left: -9999px !important;
            top : -9999px !important;
            opacity: 0 !important;
            position: fixed !important;
        }

        /* moves the video title 36 pixels to the right (we hide the channel icon, so we do this to include the space like the native player) */
        :fullscreen .ytp-show-cards-title .ytp-title-text {
            padding-left: 36px !important;
        }

        /* shows the title and the black thingy around it when in full screen */
        :fullscreen .ytp-gradient-top,
        :fullscreen .ytp-show-cards-title {
            display: block !important;
        }

        /* hide the black thingy in speeding mode, hides the channel icon, and hides the Youtube buttons (e.g. share) in full screen */
        :fullscreen .ytp-gradient-top.IframeTube_speeding,
        :fullscreen .ytp-show-cards-title .ytp-button,
        :fullscreen .ytp-show-cards-title .ytp-title-channel {
            display: none !important;
        }
    `;
        // append the styles
        document.head.appendChild(style);
    }

    // enable the previous button for playlists
    function IframeTube_enablePrevButton() {
        let prevButton = document.querySelector('.ytp-prev-button');
        // if it exists and does not contain the 'IframeTube_enabled'
        if (prevButton && !prevButton.classList.contains('IframeTube_enabled')) {
            // add the 'IframeTube_enabled' class
            prevButton.classList.add('IframeTube_enabled');
        }

        // sanity check for a playlist
        if (IframeTube_playlist) {
            // hide the end screen
            IframeTube_hideEndScreen();
        }
    }

    // disable the previous button for non playlist videos
    function IframeTube_disablePrevButton() {
        let prevButton = document.querySelector('.ytp-prev-button');
        // if it exists and does contain the 'IframeTube_enabled'
        if (prevButton && prevButton.classList.contains('IframeTube_enabled')) {
            // remove the 'IframeTube_enabled' class
            prevButton.classList.remove('IframeTube_enabled');
        }
    }

    // update the next tooltip to the current preview of the next video
    function IframeTube_nextVideoPreview(shortcutTitle, videoTitle, videoThumbnail) {
        // get the shortcut text
        let shortcutText = document.getElementById('IframeTube_NextShortcutText');
        if (shortcutText) {
            // set its text to the current shortcut title
            shortcutText.textContent = shortcutTitle;
        }

        // get the video title
        let nextVideoTitle = document.getElementById('IframeTube_NextVideoTitle');
        if (nextVideoTitle) {
            // set its text to the current next video title
            nextVideoTitle.textContent = videoTitle;
        }

        // get the video image
        let nextVideoImage = document.getElementById('IframeTube_nextVideoImage');
        if (nextVideoImage) {
            // set its background image to the video thumbnail
            nextVideoImage.style.backgroundImage = 'url("' + videoThumbnail + '")';
        }

        // update the position of the tooltip
        IframeTube_positionNextTooltip();
    }

    // positions the next tooltip based on client rect
    let IframeTube_positionNextTooltip_timeout = false;
    function IframeTube_positionNextTooltip() {

        // get the next button and next tooltip text
        let nextButton = document.querySelector('.ytp-next-button');
        let nextTooltip = document.getElementById('IframeTube_nextTooltip');
        // if they both exist
        if (nextButton && nextTooltip) {
            // get the client rect and tooltip height
            let rect = nextButton.getBoundingClientRect();
            let tooltipHeight = nextTooltip.offsetHeight;

            // if we are on a playlist, position the tooltip like this to make it as accurate as the native one
            if (IframeTube_playlist) {
                nextTooltip.style.top = (rect.top - tooltipHeight - 10) + 'px';
                nextTooltip.style.left = (rect.left + rect.width / 2 - nextTooltip.offsetWidth / 2 + 18) + 'px';
            }

            // otherwise, position it the same but move it a bit more to the right, as the previous button is disabled
            else if (!IframeTube_playlist) {
                nextTooltip.style.top = (rect.top - tooltipHeight - 10) + 'px';
                nextTooltip.style.left = (rect.left + rect.width / 2 - nextTooltip.offsetWidth / 2 + 57) + 'px';
            }
        }
        // otherwise, retry in 100ms until they exist
        else {
            clearTimeout(IframeTube_positionNextTooltip_timeout)
            IframeTube_positionNextTooltip_timeout = setTimeout(IframeTube_positionNextTooltip, 100)
            return;
        }
    }

    // update the previous tooltip to the current preview of the next video
    function IframeTube_prevVideoPreview(shortcutTitle, videoTitle, videoThumbnail) {
        // get the shortcut text
        let shortcutText = document.getElementById('IframeTube_prevShortcutText');
        if (shortcutText) {
            // set its text to the current shortcut title
            shortcutText.textContent = shortcutTitle;
        }

        // get the video title
        let prevVideoTitle = document.getElementById('IframeTube_prevVideoTitle');
        if (prevVideoTitle) {
            // set its text to the current next video title
            prevVideoTitle.textContent = videoTitle;
        }

        // get the video image
        let prevVideoImage = document.getElementById('IframeTube_prevVideoImage');
        if (prevVideoImage) {
            // set its background image to the video thumbnail
            prevVideoImage.style.backgroundImage = 'url("' + videoThumbnail + '")';
        }

        // update the position of the tooltip
        IframeTube_positionPrevTooltip();
    }

    // positions the previous tooltip based on client rect
    function IframeTube_positionPrevTooltip() {
        // get the previous button and previous button tooltip
        let prevButton = document.querySelector('.ytp-prev-button');
        let prevTooltip = document.getElementById('IframeTube_prevTooltip');

        // if they both exist
        if (prevButton && prevTooltip) {
            // get the client rect and tooltip height
            let rect = prevButton.getBoundingClientRect();
            let tooltipHeight = prevTooltip.offsetHeight;

            // position the tooltip like this to make it as accurate as the native one
            prevTooltip.style.top = (rect.top - tooltipHeight - 10) + 'px';
            prevTooltip.style.left = (rect.left + rect.width / 2 - prevTooltip.offsetWidth / 2 + 103) + 'px';
        }
    }

    // the previous button has two tooltips: one that shows if the video’s current time is less then 3 seconds (plays the previous video)
    // and a second one that shows if the video’s current time is 3 or more seconds (skips to the start of the video)

    // creates and positions the replay tooltip
    function IframeTube_replayTooltip() {
        // gets the previous button and the replay tooltip
        let prevButton = document.querySelector('.ytp-prev-button');
        let replayTooltip = document.getElementById('IframeTube_replayTooltip');
        // if it does not exist
        if (!replayTooltip) {
            // there is no reliable way to copy the 'Replay' tooltip from the player, that is why we instead create this array with the translated text in all the supported languages
            let replayTooltips = [{ "code": "af", "text": "Herhaal" }, { "code": "sq", "text": "Përsëritje" }, { "code": "am", "text": "እንደገና አጫውት።" }, { "code": "ar", "text": "إعادة التشغيل" }, { "code": "hy", "text": "Կրկնել" }, { "code": "as", "text": "পুনৰ খেলা" }, { "code": "ay", "text": "wasitat anatt’aña" }, { "code": "az", "text": "Təkrar çalın" }, { "code": "bm", "text": "Segin ka kɛ" }, { "code": "eu", "text": "Erreprodukzioa" }, { "code": "be", "text": "Паўтор" }, { "code": "bn", "text": "রিপ্লে" }, { "code": "bho", "text": "रिप्ले के बा" }, { "code": "bs", "text": "ponovljena reprodukcija" }, { "code": "bg", "text": "Повторение" }, { "code": "ca", "text": "Repetició" }, { "code": "ceb", "text": "balik-balikon" }, { "code": "ny", "text": "Seweraninso" }, { "code": "zh-CN", "text": "重播" }, { "code": "zh-TW", "text": "重播" }, { "code": "co", "text": "Riproduce" }, { "code": "hr", "text": "Replay" }, { "code": "cs", "text": "Přehrát znovu" }, { "code": "da", "text": "Genafspilning" }, { "code": "dv", "text": "ރީޕްލޭ" }, { "code": "doi", "text": "रिप्ले ऐ" }, { "code": "nl", "text": "Opnieuw afspelen" }, { "code": "en", "text": "Replay" }, { "code": "eo", "text": "Ripeto" }, { "code": "et", "text": "Kordus" }, { "code": "ee", "text": "Gbugbɔgawɔ" }, { "code": "tl", "text": "I-replay" }, { "code": "fi", "text": "Uusinta" }, { "code": "fr", "text": "Rejouer" }, { "code": "fy", "text": "Replay" }, { "code": "gl", "text": "Reprodución" }, { "code": "ka", "text": "გამეორება" }, { "code": "de", "text": "Wiederholung" }, { "code": "el", "text": "Ξαναπαίζω" }, { "code": "gn", "text": "Ñembosaraipavẽ jey" }, { "code": "gu", "text": "રિપ્લે" }, { "code": "ht", "text": "Replay" }, { "code": "ha", "text": "Sake kunnawa" }, { "code": "haw", "text": "Hoʻokani hou" }, { "code": "iw", "text": "מִשְׂחָק חוֹזֵר" }, { "code": "hi", "text": "REPLAY" }, { "code": "hmn", "text": "Rov ua dua" }, { "code": "hu", "text": "Visszajátszás" }, { "code": "is", "text": "Endurspilun" }, { "code": "ig", "text": "Tinyegharịa" }, { "code": "ilo", "text": "Panag-replay" }, { "code": "id", "text": "Memutar ulang" }, { "code": "ga", "text": "Athimirt" }, { "code": "it", "text": "Rigiocare" }, { "code": "ja", "text": "リプレイ" }, { "code": "jw", "text": "Muter maneh" }, { "code": "kn", "text": "ಮರುಪಂದ್ಯ" }, { "code": "kk", "text": "Қайталау" }, { "code": "km", "text": "ចាក់ឡើងវិញ" }, { "code": "rw", "text": "Subiza" }, { "code": "gom", "text": "रिप्ले 1" }, { "code": "ko", "text": "다시 하다" }, { "code": "kri", "text": "Riplay fɔ mek yu go bak" }, { "code": "ku", "text": "Dubare lîstin" }, { "code": "ckb", "text": "دووبارە یاریکردنەوە" }, { "code": "ky", "text": "Кайра ойнотуу" }, { "code": "lo", "text": "ຫຼິ້ນຄືນ" }, { "code": "la", "text": "Repetere" }, { "code": "lv", "text": "Atskaņot vēlreiz" }, { "code": "ln", "text": "Kozonga na mosala" }, { "code": "lt", "text": "Pakartoti" }, { "code": "lg", "text": "Okuddamu okuzannya" }, { "code": "lb", "text": "Widderhuelung" }, { "code": "mk", "text": "Реприза" }, { "code": "mai", "text": "रिप्ले 2019।" }, { "code": "mg", "text": "Famerenana" }, { "code": "ms", "text": "Main semula" }, { "code": "ml", "text": "വീണ്ടും പ്ലേ ചെയ്യുക" }, { "code": "mt", "text": "Replay" }, { "code": "mi", "text": "Whakatangihia" }, { "code": "mr", "text": "रिप्ले करा" }, { "code": "mni-Mtei", "text": "ꯔꯤꯞꯂꯦ ꯇꯧꯕꯥ" }, { "code": "lus", "text": "Replay 10 a awm" }, { "code": "mn", "text": "Дахин тоглуулах" }, { "code": "my", "text": "ပြန်ဖွင့်သည်။" }, { "code": "ne", "text": "रिप्ले गर्नुहोस्" }, { "code": "no", "text": "Spill av på nytt" }, { "code": "or", "text": "ରିପ୍ଲେ" }, { "code": "om", "text": "Irra deebiin taphachuu " }, { "code": "ps", "text": "بیا پلی کول" }, { "code": "fa", "text": "پخش مجدد" }, { "code": "pl", "text": "Powtórna rozgrywka" }, { "code": "pt", "text": "Repetir" }, { "code": "pa", "text": "ਰੀਪਲੇ" }, { "code": "qu", "text": "Replay" }, { "code": "ro", "text": "Reluare" }, { "code": "ru", "text": "Повтор" }, { "code": "sm", "text": "Toe fai" }, { "code": "sa", "text": "पुनः प्ले 1" }, { "code": "gd", "text": "Ath-chluich" }, { "code": "nso", "text": "Go bapala gape" }, { "code": "sr", "text": "Реплаи" }, { "code": "st", "text": "Bapala hape" }, { "code": "sn", "text": "Tambazve" }, { "code": "sd", "text": "وري هلايو" }, { "code": "si", "text": "නැවත ධාවනය කරන්න" }, { "code": "sk", "text": "Prehrať znova" }, { "code": "sl", "text": "Ponovitev" }, { "code": "so", "text": "Ku celi" }, { "code": "es", "text": "Repetición" }, { "code": "su", "text": "Muterkeun deui" }, { "code": "sw", "text": "Cheza tena" }, { "code": "sv", "text": "Spela om" }, { "code": "tg", "text": "Бозӣ" }, { "code": "ta", "text": "மீண்டும் விளையாடு" }, { "code": "tt", "text": "Кабатлау" }, { "code": "te", "text": "రీప్లే చేయండి" }, { "code": "th", "text": "เล่นซ้ำ" }, { "code": "ti", "text": "ዳግማይ ጸወታ" }, { "code": "ts", "text": "Ku tlanga nakambe" }, { "code": "tr", "text": "Tekrar oynat" }, { "code": "tk", "text": "Gaýtalama" }, { "code": "ak", "text": "San bɔ bio" }, { "code": "uk", "text": "Повтор" }, { "code": "ur", "text": "ری پلے" }, { "code": "ug", "text": "قايتا قويۇش" }, { "code": "uz", "text": "Takrorlash" }, { "code": "vi", "text": "Phát lại" }, { "code": "cy", "text": "Ailchwarae" }, { "code": "xh", "text": "Phinda udlale" }, { "code": "yi", "text": "ריפּליי" }, { "code": "yo", "text": "Tun ṣe" }, { "code": "zu", "text": "Dlala kabusha" }]

            // extract the 'hl' parameter from the embedded url (hl = current player language)
            let language = IframeTube_extractParams['hl']
            // set the default value first
            let replayTooltipText = 'Replay';
            // loop through all of them until we found one that match, and set th replay tooltip text to it
            for (let i = 0; i < replayTooltips.length; i++) {
                if (replayTooltips[i].code === language) {
                    replayTooltipText = replayTooltips[i].text;
                    break;
                }
            }

            // create the replay tooltip (more reliable with JS, even though it is a bit messy)
            replayTooltip = document.createElement('div');
            replayTooltip.style.pointerEvents = 'none';
            replayTooltip.style.opacity = '0';
            replayTooltip.style.position = 'fixed';
            replayTooltip.style.top = '-35px';
            replayTooltip.style.left = '50%';
            replayTooltip.style.background = 'rgba(28, 28, 28, 0.9)';
            replayTooltip.style.color = '#ffffff';
            replayTooltip.style.borderRadius = '4px';
            replayTooltip.style.fontWeight = '500';
            replayTooltip.style.fontSize = '12.98px';
            replayTooltip.style.paddingLeft = '9px';
            replayTooltip.style.paddingRight = '9px';
            replayTooltip.style.paddingBottom = '0';
            replayTooltip.style.height = '25px';
            replayTooltip.style.boxSizing = 'border-box';
            replayTooltip.style.lineHeight = '25px';
            replayTooltip.style.fontFamily = '"YouTube Noto", Roboto, Arial, sans-serif';
            replayTooltip.style.whiteSpace = 'nowrap';
            replayTooltip.id = 'IframeTube_replayTooltip'; // set a custom ID, so we can select it later
            replayTooltip.textContent = replayTooltipText;
            prevButton.appendChild(replayTooltip);
        }

        // get the client rect
        let rect = prevButton.getBoundingClientRect();
        // position the button based of that
        replayTooltip.style.top = (rect.top - 35) + 'px';
        // positions it like the native replay tooltip
        replayTooltip.style.left = (rect.left + rect.width / 8 - 5) + 'px';

        // target the video element
        let video = document.querySelector('video');

        // if the current time is less then 3 seconds
        if (video.currentTime < 3) {
            // get the tooltips and hover state
            let prevTooltip = document.getElementById('IframeTube_prevTooltip');
            let replayTooltip = document.getElementById('IframeTube_replayTooltip');
            let isHovering = prevButton.matches(':hover, :focus-visible');
            // if we are hovering over the button and the tooltips exist
            if (replayTooltip && isHovering && replayTooltip.style.opacity === '1') {
                // hide the replay tooltip first
                replayTooltip.style.opacity = '0';
                if (prevTooltip) {
                    // position the previous tooltip and show it
                    IframeTube_positionPrevTooltip();
                    prevTooltip.style.opacity = '1';
                }
            }
        }

        // if current time is more or equal to 3
        else if (video.currentTime >= 3) {
            // get the tooltips and hover state
            let prevTooltip = document.getElementById('IframeTube_prevTooltip');
            let replayTooltip = document.getElementById('IframeTube_replayTooltip');
            let isHovering = prevButton.matches(':hover, :focus-visible');
            // if we are hovering over the button and the tooltips exist
            if (prevTooltip && isHovering && prevTooltip.style.opacity === '1') {
                // hide the previous tooltip first
                prevTooltip.style.opacity = '0';
                if (replayTooltip) {
                    // position the replay tooltip and show it
                    IframeTube_replayTooltip();
                    replayTooltip.style.opacity = '1';
                }
            }
        }
    }

    // manage theater attributes
    function IframeTube_theaterButtonAttribute(data) {
        // target the remote and theater buttons
        let theaterButton = document.querySelector('.ytp-size-button');
        let remoteButton = document.querySelector('.ytp-remote-button');
        if (theaterButton) {
            // set the native attributes to '' (none), this is so our CSS rule for empty Youtube attributes hides it
            theaterButton.setAttribute('aria-label', '');
            theaterButton.setAttribute('data-tooltip-title', '');
            // set our custom data-label for our CSS to use and make it visible
            theaterButton.setAttribute('data-label', data);
            theaterButton.classList.add('IframeTube_visible');

            // if the tooltip is longer then 18 characters, and the remote button is disabled, mark it as a long tooltip (we do this so it always fits in the player correctly)
            let tooltipText = theaterButton.getAttribute('data-label');
            if (tooltipText && tooltipText.length > 18 && remoteButton.style.display === 'none') {
                theaterButton.classList.add('long-tooltip');
            }
            // otherwise, it is a short tooltip, removes the long tooltip class
            else {
                theaterButton.classList.remove('long-tooltip');
            }
        }
    }

    // sets the theater icon based on how the function was called
    function IframeTube_setTheaterIcon(icon) {
        // finds the theater button
        let theaterButton = document.querySelector('.ytp-size-button');
        if (theaterButton) {
            // set the icon to the theater one
            if (icon === 'theaterIcon') {
                IframeTube_setInnerHTML(theaterButton, IframeTube_theater_theaterIcon);
            }

            // set the icon to the default one
            else if (icon === 'defaultIcon') {
                IframeTube_setInnerHTML(theaterButton, IframeTube_theater_defaultIcon);
            }
        }
    }

    // adds missing controls to the embedded player, which the native one has
    let IframeTube_player_customControls_timeout = false;
    function IframeTube_player_customControls() {

        // target the play button (one of the first buttons to render, most reliable)
        let playButton = document.querySelector('.ytp-play-button');
        // if it does not exist, retry in 100 ms until it does
        if (!playButton) {
            clearTimeout(IframeTube_player_customControls_timeout);
            IframeTube_player_customControls_timeout = setTimeout(IframeTube_player_customControls, 100);
            return;
        }

        // target the next button
        let nextButton = document.querySelector('.ytp-next-button');
        if (nextButton) {
            // tells the top window to play the next video when it is clicked
            nextButton.addEventListener('click', () => {
                window.top.postMessage('IframeTube_nextVideo', '*');
            });

            // target the subtitles button
            let subtitlesButton = document.querySelector('.ytp-subtitles-button');
            // if it exists, inject the Youtube next tooltip before them (invisible for now)
            if (subtitlesButton) {
                IframeTube_insertAdjacentHTML(subtitlesButton, 'beforebegin', '<div aria-live="polite" data-layer="4" style="opacity: 0" id="IframeTube_nextTooltip" class="ytp-tooltip ytp-text-detail ytp-preview ytp-bottom"><div class="ytp-tooltip-text-wrapper" aria-hidden="true" style="width: 243px;"><div class="ytp-tooltip-edu" style="bottom: 138px;"><svg height="100%" viewBox="0 0 36 36" width="100%"><path d="M14.1 36.75 12 34.65 24 22.65 36 34.65 33.9 36.75 24 26.85ZM14.1 24.1 12 22 24 10 36 22 33.9 24.1 24 14.2Z"></path></svg><span></span></div><div class="ytp-tooltip-image"></div><div class="ytp-tooltip-title" style="right: 123px; text-align: center;"><span id="IframeTube_NextShortcutText"></span><div class="ytp-tooltip-keyboard-shortcut"></div></div><div class="ytp-tooltip-bottom-text ytp-tooltip-text-no-title"><span class="ytp-tooltip-text" id="IframeTube_NextVideoTitle"></span><div class="ytp-tooltip-keyboard-shortcut"></div></div><div class="ytp-tooltip-progress-bar-pill"><div class="ytp-tooltip-progress-bar-pill-time-stamp"></div><div class="ytp-tooltip-progress-bar-pill-title"></div></div></div><div class="ytp-tooltip-bg" id="IframeTube_nextVideoImage" style="width: 243px; height: 141px; background-image: url(&quot;https://i1.ytimg.com/vi/V4DDt30Aat4/mqdefault.jpg&quot;); background-size: 243px 141px;"><div class="ytp-tooltip-duration"></div></div></div>')
            }

            // target the next tooltip
            let nextTooltip = document.getElementById('IframeTube_nextTooltip');
            if (nextTooltip) {
                // set its position to fixed and z-index to 999
                nextTooltip.style.position = 'fixed';
                nextTooltip.style.zIndex = '999';
            }

            // when we put our mouse above the button, position the next tooltip and show it
            nextButton.addEventListener('mouseenter', () => {
                if (nextTooltip) {
                    IframeTube_positionNextTooltip();
                    nextTooltip.style.opacity = '1';
                }
            });

            // if we use the tab navigation over the button, position the tooltip and show it
            nextButton.addEventListener('focus', () => {
                if (nextButton.matches(':focus-visible')) {
                    if (nextTooltip) {
                        IframeTube_positionNextTooltip();
                        nextTooltip.style.opacity = '1';
                    }
                }
            });

            // if we leave the button with our mouse, and it is not being selected with tab navigation, hide it
            nextButton.addEventListener('mouseleave', () => {
                if (nextTooltip && !nextButton.matches(':focus-visible')) {
                    nextTooltip.style.opacity = '0';
                }
            });

            // if we leave the button with tab navigation, hide it
            nextButton.addEventListener('blur', () => {
                if (nextTooltip) {
                    nextTooltip.style.opacity = '0';
                }
            });
        }

        // target the previous button
        let prevButton = document.querySelector('.ytp-prev-button');
        if (prevButton) {
            // adds a listener for click to the button
            prevButton.addEventListener('click', () => {
                // target the video element
                let video = document.querySelector('video');
                // if the video current time is below 3
                if (video.currentTime < 3) {
                    // tell the top window to play the previous video
                    window.top.postMessage('IframeTube_previousVideo', '*');
                }
                // otherwise, set the video time to 0
                else {
                    video.currentTime = 0;
                }
            });

            // target the subtitles button
            let subtitlesButton = document.querySelector('.ytp-subtitles-button');
            // if it exists, inject the Youtube previous tooltip before them (invisible for now)
            if (subtitlesButton) {
                IframeTube_insertAdjacentHTML(subtitlesButton, 'beforebegin', '<div aria-live="polite" data-layer="4" style="opacity: 0" id="IframeTube_prevTooltip" class="ytp-tooltip ytp-text-detail ytp-preview ytp-bottom"><div class="ytp-tooltip-text-wrapper" aria-hidden="true" style="width: 243px;"><div class="ytp-tooltip-edu" style="bottom: 138px;"><svg height="100%" viewBox="0 0 36 36" width="100%"><path d="M14.1 36.75 12 34.65 24 22.65 36 34.65 33.9 36.75 24 26.85ZM14.1 24.1 12 22 24 10 36 22 33.9 24.1 24 14.2Z"></path></svg><span></span></div><div class="ytp-tooltip-image"></div><div class="ytp-tooltip-title" style="right: 123px; text-align: center;"><span id="IframeTube_prevShortcutText"></span><div class="ytp-tooltip-keyboard-shortcut"></div></div><div class="ytp-tooltip-bottom-text ytp-tooltip-text-no-title"><span class="ytp-tooltip-text" id="IframeTube_prevVideoTitle"></span><div class="ytp-tooltip-keyboard-shortcut"></div></div><div class="ytp-tooltip-progress-bar-pill"><div class="ytp-tooltip-progress-bar-pill-time-stamp"></div><div class="ytp-tooltip-progress-bar-pill-title"></div></div></div><div class="ytp-tooltip-bg" id="IframeTube_prevVideoImage" style="width: 243px; height: 141px; background-image: url(&quot;https://i1.ytimg.com/vi/V4DDt30Aat4/mqdefault.jpg&quot;); background-size: 243px 141px;"><div class="ytp-tooltip-duration"></div></div></div>')
            }

            // target the previous tooltip
            let prevTooltip = document.getElementById('IframeTube_prevTooltip');
            if (prevTooltip) {
                // set its position to fixed and z-index to 999
                prevTooltip.style.position = 'fixed';
                prevTooltip.style.zIndex = '999';
            }

            // adds a listener for when we put our mouse above the button
            prevButton.addEventListener('mouseenter', () => {
                // target the video element
                let video = document.querySelector('video');
                // if the tooltip and video exist
                if (prevTooltip && video) {
                    // if the video current time is below 3
                    if (video.currentTime < 3) {
                        // position the previous tooltip and show it
                        IframeTube_positionPrevTooltip();
                        prevTooltip.style.opacity = '1';
                    }
                    else {
                        // otherwise, if it is equal or above 3, position the replay tooltip and hide the previous tooltip
                        IframeTube_replayTooltip();
                        let replayTooltip = document.getElementById('IframeTube_replayTooltip');
                        prevTooltip.style.opacity = '0';
                        replayTooltip.style.opacity = '1';
                    }
                }
            });

            // adds a listener for when we select the button via tab navigation
            prevButton.addEventListener('focus', () => {
                if (prevButton.matches(':focus-visible')) {
                    // target the video element
                    let video = document.querySelector('video');
                    // if the tooltip and video exist
                    if (prevTooltip && video) {
                        // if the video current time is below 3
                        if (video.currentTime < 3) {
                            IframeTube_positionPrevTooltip();
                            prevTooltip.style.opacity = '1';
                        }

                        // otherwise, if it is equal or above 3, position the replay tooltip and hide the previous tooltip
                        else {
                            IframeTube_replayTooltip();
                            let replayTooltip = document.getElementById('IframeTube_replayTooltip');
                            prevTooltip.style.opacity = '0';
                            replayTooltip.style.opacity = '1';
                        }
                    }
                }
            });

            // adds a listener for when we put our mouse away from the button
            prevButton.addEventListener('mouseleave', () => {
                // if the previous tooltip exists and it is not selected via tab navigation
                if (prevTooltip && !prevButton.matches(':focus-visible')) {
                    // hide the previous tooltip
                    prevTooltip.style.opacity = '0';
                }

                // target the replay tooltip
                let replayTooltip = document.getElementById('IframeTube_replayTooltip');
                if (replayTooltip) {
                    // hide the replay tooltip
                    replayTooltip.style.opacity = '0';
                }
            });

            // adds a listener for when we stop selecting the button with tab navigation
            prevButton.addEventListener('blur', () => {
                if (prevTooltip) {
                    // hide the prev tooltip
                    prevTooltip.style.opacity = '0';
                }

                // target the replay tooltip
                let replayTooltip = document.getElementById('IframeTube_replayTooltip');
                if (replayTooltip) {
                    // hide the replay tooltip
                    replayTooltip.style.opacity = '0';
                }
            });
        }

        // target the theater button
        let theaterButton = document.querySelector('.ytp-size-button');
        if (theaterButton) {

            // set the html for the default icon
            let defaultIcon = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-30"></use><path d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z" fill="#fff" fill-rule="evenodd" id="ytp-id-30"></path></svg>';

            // set the html for the theater icon
            let theaterIcon = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-41"></use><path d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z" fill="#fff" fill-rule="evenodd" id="ytp-id-41"></path></svg>';

            // to make the button appear faster, set the default icon immediately
            IframeTube_setInnerHTML(theaterButton, defaultIcon);

            // add an event listener for clicking the button
            theaterButton.addEventListener('click', () => {
                // notify the top window to enter/exit theater
                window.top.postMessage('IframeTube_theater', '*');
                // target the player
                let player = document.querySelector('.html5-video-player');
                // focus the player without scrolling to it (this prevents the theater tooltip from being stucked, as we enable it on tab navigation)
                player.focus({ preventScroll: true });
            });

            // add an event listener for when we put our mouse above the button
            theaterButton.addEventListener('mouseenter', () => {
                // if one of the native attributes does not equal to '' (none)
                if (theaterButton.getAttribute('aria-label') !== '' || theaterButton.getAttribute('data-tooltip-title') !== '') {
                    // set them both to '' (none), this is so our CSS rule for empty Youtube tooltips hides it
                    theaterButton.setAttribute('aria-label', '');
                    theaterButton.setAttribute('data-tooltip-title', '');
                }
            });

            // expose the icons globally
            IframeTube_theater_theaterIcon = theaterIcon;
            IframeTube_theater_defaultIcon = defaultIcon;
        }

        // target the subtitles button
        let subtitlesButton = document.querySelector('.ytp-subtitles-button');
        // if it exists, inject the autoplay button to the left of it with our custom ID
        if (subtitlesButton) {
            IframeTube_insertAdjacentHTML(subtitlesButton, 'beforebegin', `<button class="ytp-button ytp-autonav-toggle" id="IframeTube_autoplayButton"><div class="ytp-autonav-toggle-button-container"><div class="ytp-autonav-toggle-button" aria-checked="${IframeTube_extractParams['IframeTube_autoPlay']}"></div></div></button>`);
        }

        // configures the autoplay button
        let IframeTube_autoPlay_timeout = false;
        function IframeTube_autoplayButton() {
            // if one of the tooltips does not exist yet, retry in 100ms until it does
            if (!IframeTube_autoplay_enabledTooltip || !IframeTube_autoplay_disabledTooltip) {
                clearTimeout(IframeTube_autoPlay_timeout);
                IframeTube_autoPlay_timeout = setTimeout(IframeTube_autoplayButton, 100);
                return;
            }

            // target our autoplay button and the inner one
            let autoPlayButton = document.getElementById('IframeTube_autoplayButton');
            let innerButton = document.querySelector('.ytp-autonav-toggle-button');

            // if our autoplay button exists
            if (autoPlayButton) {

                // extract the params from the embedded url, and if they equal to true
                if (IframeTube_extractParams['IframeTube_autoPlay'] === 'true') {
                    // set our tooltip to the enabled one
                    innerButton.setAttribute('data-label', IframeTube_autoplay_enabledTooltip);
                    // set the autoplay flag to true
                    IframeTube_autoPlay = true;
                    // if we are not on a playlist, hide the end screen (for playlists it is already hidden)
                    if (!IframeTube_playlist) {
                        IframeTube_hideEndScreen();
                    }
                }

                // else if the params equal to false
                else if (IframeTube_extractParams['IframeTube_autoPlay'] === 'false') {
                    // set our tooltip to the disabled one
                    innerButton.setAttribute('data-label', IframeTube_autoplay_disabledTooltip);
                }

                // add a listener for when we click the button
                autoPlayButton.addEventListener('click', () => {
                    // if the button is disabled
                    if (innerButton.getAttribute('aria-checked') === 'false') {
                        // set the icon to enabled
                        innerButton.setAttribute('aria-checked', 'true');
                        // notify the top window that autoplay is true
                        window.top.postMessage('IframeTube_enableAutoplay', '*');

                        // set our tooltip to the enabled one
                        innerButton.setAttribute('data-label', IframeTube_autoplay_enabledTooltip);

                        // set the autoplay flag to true
                        IframeTube_autoPlay = true;

                        // if we are not on a playlist, hide the end screen (for playlists it is already hidden)
                        if (!IframeTube_playlist) {
                            IframeTube_hideEndScreen();
                        }
                    }

                    // else, if the button is enabled
                    else if (innerButton.getAttribute('aria-checked') === 'true') {
                        // set the icon to disabled
                        innerButton.setAttribute('aria-checked', 'false');
                        // notify the top window that autoplay is false
                        window.top.postMessage('IframeTube_disableAutoplay', '*');

                        // set our tooltip to the disabled one
                        innerButton.setAttribute('data-label', IframeTube_autoplay_disabledTooltip);

                        // set the autoplay flag to false
                        IframeTube_autoPlay = false;

                        // if we are not on a playlist, show the end screen (for playlists it is always hidden)
                        if (!IframeTube_playlist) {
                            IframeTube_showEndScreen();
                        }
                    }
                });
                // shows the autoplay button’s tooltip after it exists
                innerButton.classList.add('IframeTube_visible');
            }
        }
        // calls the function
        IframeTube_autoplayButton();
    }

    // adds custom listeners to the embedded player that it does not have
    let IframeTube_player_customListeners_timeout = false;
    function IframeTube_player_customListeners() {
        // target the main video element
        let player = document.querySelector('#player video');
        // if it does not exist, retry in 100 ms until it does
        if (!player) {
            clearTimeout(IframeTube_player_customListeners_timeout);
            IframeTube_player_customListeners_timeout = setTimeout(IframeTube_player_customListeners, 100);
            return;
        }

        // adds these listeners to detect when the video ended
        player.addEventListener('ended', IframeTube_videoEnded);
        player.addEventListener('pause', IframeTube_videoEnded);


        // adds a listener that fires when the user skips through the video
        player.addEventListener('seeked', () => {
            // target the previous button
            let prevButton = document.querySelector('.ytp-prev-button');
            if (prevButton) {
                // if we are hovering over it or selecting it via tab navigation
                let isHovering = prevButton.matches(':hover, :focus-visible');
                if (isHovering) {
                    // this function determinates if we should show the replay tooltip, or the previous tooltip
                    IframeTube_replayTooltip();
                }
            }
        });

        // adds a listener that fires every 250ms as the video plays
        player.addEventListener('timeupdate', () => {
            // target the previous button
            let prevButton = document.querySelector('.ytp-prev-button');
            if (prevButton) {
                // if we are hovering over it or selecting it via tab navigation
                let isHovering = prevButton.matches(':hover, :focus-visible');
                if (isHovering) {
                    // this function determinates if we should show the replay tooltip, or the previous tooltip
                    IframeTube_replayTooltip();
                }
            }
        });

        // adds a listener for keyboard shortcuts
        document.addEventListener('keydown', (event) => {
            // if we are holding the altkey, ctrlkey, or meta key, do not proceed
            if (event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }

            // if the shortcut is 't' or 'T'
            else if (event.key.toLowerCase() === 't') {
                // notify the top window to enter/exit theater
                window.top.postMessage('IframeTube_theater', '*');
            }

            // if the shortcut is 'i' or 'I'
            else if (event.key.toLowerCase() === 'i') {
                // target the pip button
                let pipButton = document.querySelector('.ytp-pip-button');
                // if it exists
                if (pipButton) {
                    // click it
                    pipButton.click();
                }
            }

            // if the shortcut is 'n' or 'N' while shift is being hold
            else if (event.key.toLowerCase() === 'n' && event.shiftKey) {
                // tell the top window to play the next video
                window.top.postMessage('IframeTube_nextVideo', '*');
            }

            // if the shortcut is 'p' or 'P' while shift is being hold
            else if (event.key.toLowerCase() === 'p' && event.shiftKey) {
                // tell the top window to play the previous video
                window.top.postMessage('IframeTube_previousVideo', '*');
            }

        });

        // support double speed shortcuts (e.g. hold space bar or the left click mouse button to go double speed)
        IframeTube_doubleSpeedShortcuts();
    }

    // checks if the video ended
    function IframeTube_videoEnded() {
        // target the main video element and the endscreen
        let player = document.querySelector('#player video');
        let endscreen = document.querySelector('.videowall-endscreen')

        // if the endscreen is visible (this is not affected by our class that hides it)
        if (endscreen && endscreen.style.display !== 'none') {
            // if we are looping, set the time to 0
            if (player.loop) {
                player.currentTime = 0;
            }
            // otherwise, notify the top window that the video ended
            else {
                window.top.postMessage('IframeTube_video_ended', '*');
            }
        }
    }

    // adds double speed shortcuts to the embedded player
    function IframeTube_doubleSpeedShortcuts() {

        // target the main video
        let player = document.querySelector('#player video');

        // protects the class from being removed by Youtube’s scripts
        let IframeTube_class = new Set();

        // sorry yall that this is a bit messy, but it is the only reliable way
        // monkey patches the class from being removed
        function IframeTube_protectClass(player, className) {
            if (!player.IframeTube_class) {
                let remove = player.classList.remove;
                player.classList.remove = (...classes) => {
                    remove.apply(player.classList, classes.filter(c => !IframeTube_class.has(c)));
                };
                player.IframeTube_class = true;
            }
            // adds the class to the list
            IframeTube_class.add(className);
        }

        // hides the controls when speeding
        function hideControls() {
            // targets the player
            let player = document.querySelector('.html5-video-player');
            if (player) {
                // adds the class that Youtube uses to hide controls
                player.classList.add('ytp-hide-controls');
                // protects it
                IframeTube_protectClass(player, 'ytp-hide-controls');
                // hides the class that Youtube uses to hide the video title
                player.classList.add('ytp-hide-info-bar');
                // protects it
                IframeTube_protectClass(player, 'ytp-hide-info-bar');
                // targets the litle black thingy around the video title
                let gradientTop = player.querySelector('.ytp-gradient-top');
                if (gradientTop) {
                    // adds a speeding class to it, which hides it
                    gradientTop.classList.add('IframeTube_speeding');
                }
            }
        }

        // shows the controls
        function showControls() {
            // targets the player
            let player = document.querySelector('.html5-video-player');
            if (player) {
                // unprotects the classes
                IframeTube_class.delete('ytp-hide-controls');
                IframeTube_class.delete('ytp-hide-info-bar');
                // shows the controls and the video title
                player.classList.remove('ytp-hide-controls');
                player.classList.remove('ytp-hide-info-bar');
                // removes the auto hide class, so the controls are shown immediately when we stop speeding (native behavior)
                player.classList.remove('ytp-autohide');
                // focus the player to prevent edge cases (without scrolling back to it)
                player.focus({ preventScroll: true });

                // targets the little black thingy around the video title
                let gradientTop = player.querySelector('.ytp-gradient-top');
                if (gradientTop) {
                    // removes the speeding class from it, which shows it
                    gradientTop.classList.remove('IframeTube_speeding');
                }

                // targets the controls
                let controls = player.querySelector('.ytp-chrome-bottom');
                if (controls) {
                    // creates and dispatches a fake mouse move event to it (this unfreezes the player time in the controls)
                    let rect = controls.getBoundingClientRect();
                    for (let i = 0; i < 3; i++) {
                        let evt = new MouseEvent('mousemove', {
                            bubbles: true,
                            cancelable: true,
                            view: window,
                            clientX: rect.left + 2 + i,
                            clientY: rect.top + 2 + i
                        });
                        controls.dispatchEvent(evt);
                    }
                    // also does the same with mouse over and mouse enter
                    ['mouseover', 'mouseenter'].forEach(type => {
                        let evt = new MouseEvent(type, {
                            bubbles: true,
                            cancelable: true,
                            view: window,
                            clientX: rect.left + 2,
                            clientY: rect.top + 2
                        });
                        controls.dispatchEvent(evt);
                    });
                }
            }
        }

        // creates the Youtube speed overlay
        function createSpeedOverlay() {
            // targets it
            let doubleSpeedElement = document.getElementById("doubleSpeedElement");
            // if it does not exist, create it
            if (!doubleSpeedElement) {
                doubleSpeedElement = document.createElement("div");
                doubleSpeedElement.id = "doubleSpeedElement";
                // sets position relative and zIndex 999 to make it appear in full screen
                doubleSpeedElement.style.position = "relative";
                doubleSpeedElement.style.zIndex = "999";

                // sets the exact same inner html as the native player has
                IframeTube_setInnerHTML(doubleSpeedElement, `
        <div class="ytp-overlay ytp-speedmaster-overlay" data-layer="4">
            <div class="ytp-speedmaster-user-edu ytp-speedmaster-has-icon">
                <div class="ytp-speedmaster-label">2x</div>
                    <div class="ytp-speedmaster-icon">
                        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                            <path class="ytp-svg-fill" d="M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z" id="ytp-id-1"></path>
                        </svg>
                </div>
            </div>
        </div>
    `);
                // targets the player
                let player = document.querySelector(".html5-video-player");
                if (player) {
                    // appends it to the player
                    player.appendChild(doubleSpeedElement);
                }
            }
            // returns the double speed element
            return doubleSpeedElement;
        }

        // shows the speed overlay (custom speed parameter for the future)
        function showSpeedOverlay(speed = 2) {
            // creates the speed overlay
            let doubleSpeedElement = createSpeedOverlay();
            // gets the label
            let label = doubleSpeedElement.querySelector(".ytp-speedmaster-label");
            if (label) {
                // sets the speeding text to it (e.g. 2x)
                label.textContent = `${speed}x`;
            }

            // shows it with a opacity to make it look nicer
            doubleSpeedElement.style.display = "block";
            doubleSpeedElement.style.opacity = "1";
        }

        // hides the speed overlay
        function hideSpeedOverlay() {
            // targets the double speed element
            let doubleSpeedElement = document.getElementById("doubleSpeedElement");
            if (doubleSpeedElement) {
                // hides it with opacity to make it look nicer
                doubleSpeedElement.style.opacity = "0";
                doubleSpeedElement.style.display = "none";
            }
        }

        // refetch the iframe api
        IframeTube_iframe_api = document.getElementById('movie_player')

        // define the space speeding variables
        let spaceHoldTime = 0;
        let spaceHoldTimeout = false;
        let spaceSpeeding = false;
        let spaceVideoWasPaused = false;
        let spacePreviousPlaybackRate = false;

        // function to enter speeding
        function IframeTube_spaceEnterSpeeding(e) {
            // if the code or key is space, proceed
            if (e.code === 'Space' || e.key === ' ') {

                // if a Youtube error is showing, do not proceed
                let errorElement = document.querySelector('.ytp-error');
                if (errorElement) {
                    return;
                }

                // if we are already left click speeding, do not proceed
                if (leftClickSpeeding) {
                    return;
                }

                // prevents the default browser and Youtube action
                e.preventDefault();
                e.stopImmediatePropagation();

                // if the event is repeating (e.g. holding the bar), do not proceed
                if (e.repeat) {
                    return;
                }

                // get the previous playback, which we will then restore
                spacePreviousPlaybackRate = IframeTube_iframe_api.getPlaybackRate();

                // clears the timeout first, then gets the new hold time
                clearTimeout(spaceHoldTimeout);
                spaceHoldTime = Date.now();

                // if we are holding for 500ms (half a second), enter space speeding
                spaceHoldTimeout = setTimeout(() => {
                    // sets the video playback to 2
                    IframeTube_iframe_api.setPlaybackRate(2);
                    // hides the controls and shows the '2' speed overlay
                    showSpeedOverlay(2);
                    hideControls();
                    // sets the space speeding flag to true
                    spaceSpeeding = true;
                    // if the video was paused, set the 'spaceVideoWasPaused' flag to true, and play the video
                    if (player.paused) {
                        spaceVideoWasPaused = true;
                        player.play();
                    }
                }, 500);
            }
        }

        // function to exit space speeding
        function IframeTube_spaceExitSpeeding(e) {
            // if the code or key is space, or the event type is blur, proceed
            if (e.code === 'Space' || e.key === ' ' || e.type === 'blur') {

                // if we are already left click speeding, do not proceed
                if (leftClickSpeeding) {
                    return;
                }

                // clear the timeout first
                clearTimeout(spaceHoldTimeout);

                // prevents the default browser and Youtube action
                e.preventDefault();
                e.stopImmediatePropagation();

                // if we were holding space for less then 500ms, and we were not speeding, dispatch a fake 'k' event to pause the video
                if (!spaceSpeeding && Date.now() - spaceHoldTime < 500) {
                    // target the video
                    player = document.querySelector('#player video');
                    // dispatch the fake 'k' event
                    player.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', code: 'KeyK', keyCode: 75, which: 75, bubbles: true }));
                }

                // otherwise, we were speeding, so exit it
                else {
                    // set the previous playback rate
                    IframeTube_iframe_api.setPlaybackRate(spacePreviousPlaybackRate);
                    // hide the speed overlay and show controls
                    hideSpeedOverlay();
                    showControls();
                    // sets the space speeding flag to false
                    spaceSpeeding = false;
                    // if the video was paused before speeding, pause it
                    if (spaceVideoWasPaused) {
                        player.pause();
                        // reset the flag
                        spaceVideoWasPaused = false;
                    }
                }

                // reset the space hold time
                spaceHoldTime = 0;
            }
        }

        // add listeners for keydown and keyup
        document.addEventListener('keydown', IframeTube_spaceEnterSpeeding, true);
        document.addEventListener('keyup', IframeTube_spaceExitSpeeding, true);

        // left click speeding flags
        let leftClickHoldTimeout = false;
        let leftClickSpeeding = false;
        let leftClickVideoWasPaused = false;
        let leftClickPreviousPlaybackRate = false;

        let leftClickSuppressNext = false;
        let leftClickSuppressTimer = false;

        // function to enter speeding
        function IframeTube_leftClickEnterSpeeding(e) {

            // if it isn’t the left mouse button, do not proceed
            if (e.button !== 0) {
                return;
            }

            // if we are already space speeding, do not proceed
            if (spaceSpeeding) {
                return;
            }

            // clear the timeout first
            clearTimeout(leftClickHoldTimeout);

            // get the previous playback, which we will then restore
            leftClickPreviousPlaybackRate = IframeTube_iframe_api.getPlaybackRate();

            // if we are holding for 500 ms (half a second), enter left click speeding
            leftClickHoldTimeout = setTimeout(() => {

                // prevents the default browser and Youtube action
                e.preventDefault();
                e.stopImmediatePropagation();

                // sets the video playback to 2
                IframeTube_iframe_api.setPlaybackRate(2);
                // hides the controls and shows the '2' speed overlay
                showSpeedOverlay(2);
                hideControls();
                // sets the left click speeding flag to true, and also indicates that we should supress the next click
                leftClickSpeeding = true;
                leftClickSuppressNext = true;

                // if the player was paused, set the 'leftClickVideoWasPaused' to true, and play the video
                if (player.paused) {
                    leftClickVideoWasPaused = true;
                    player.play();
                }
            }, 500);
        }

        // function to exit left click speeding
        function IframeTube_leftClickExitSpeeding(e) {

            // clear the timeout first (also for non speeding cases)
            clearTimeout(leftClickHoldTimeout);

            // if we are not speeding, do not proceed
            if (!leftClickSpeeding) {
                return;
            }

            // prevents the default browser and Youtube action
            e.preventDefault();
            e.stopImmediatePropagation();


            // set the previous playback rate
            IframeTube_iframe_api.setPlaybackRate(leftClickPreviousPlaybackRate);
            // hide the speed overlay and show the controls
            hideSpeedOverlay();
            showControls();
            // set the left click speeding flag to false
            leftClickSpeeding = false;

            // if the video was paused before speeding, pause it
            if (leftClickVideoWasPaused) {
                player.pause();
                // reset the flag
                leftClickVideoWasPaused = false;
            }

            // indicate that we should supress the next click
            leftClickSuppressNext = true;
            // clear the left click supress timer
            clearTimeout(leftClickSuppressTimer);
            // set the suppress next click flag to false after 300ms
            leftClickSuppressTimer = setTimeout(() => {
                leftClickSuppressNext = false;
            }, 300);
        }

        // add an event listener that fires when we switch to a different tab or window
        window.addEventListener('blur', (e) => {
            // if we are space speeding
            if (spaceSpeeding) {
                // exit space speeding
                IframeTube_spaceExitSpeeding(e);
            }
            // if we are left click speeding
            if (leftClickSpeeding) {
                // exit left click speeding
                IframeTube_leftClickExitSpeeding(e);
            }
        });

        // refetch the player (solves some edge cases)
        player = document.querySelector('#player video');

        // if the window is a pointer event
        if (window.PointerEvent) {
            // add pointer listeners instead of mouse ones
            player.addEventListener('pointerdown', IframeTube_leftClickEnterSpeeding, true);
            player.addEventListener('pointerup', IframeTube_leftClickExitSpeeding, true);
            player.addEventListener('pointerleave', IframeTube_leftClickExitSpeeding, true);
            player.addEventListener('pointercancel', IframeTube_leftClickExitSpeeding, true);
        }

        // otherwise, add mouse listeners
        else {
            player.addEventListener('mousedown', IframeTube_leftClickEnterSpeeding, true);
            player.addEventListener('mouseup', IframeTube_leftClickExitSpeeding, true);
            player.addEventListener('mouseleave', IframeTube_leftClickExitSpeeding, true);
        }

        // add a listener for click
        player.addEventListener('click', e => {
            // if the supress flag is true
            if (leftClickSuppressNext) {
                // prevent the default browser and Youtube behavour
                e.preventDefault();
                e.stopImmediatePropagation();
                // set the flag to false
                leftClickSuppressNext = false;
                // if the left click supress timer exists, clear it and set it to false
                if (leftClickSuppressTimer) {
                    clearTimeout(leftClickSuppressTimer);
                    leftClickSuppressTimer = false;
                }
            }
        }, true);
    }

    // handle the 'Picture In Picture' mode
    let IframeTube_pip_buttons_interval = false;
    let IframeTube_pip_handler_timeout = false;
    function IframeTube_pip_handler() {
        // target the video element
        let video = document.querySelector('video');
        // if it does not exist, retry in 100ms until it does
        if (!video) {
            clearTimeout(IframeTube_pip_handler_timeout);
            IframeTube_pip_handler_timeout = setTimeout(IframeTube_pip_handler, 100);
            return;
        }

        // add a listener that fires when we enter PIP
        video.addEventListener('enterpictureinpicture', () => {
            // notify the top window that we had entered pip
            window.top.postMessage('IframeTube_enteredPip', '*');
            // enable the missing buttons for PIP
            IframeTube_pip_buttons();
            // while inside PIP, loop that function every 100ms (only reliable way)
            IframeTube_pip_buttons_interval = setInterval(IframeTube_pip_buttons, 100);
        });

        // add a listener that fires when we leave pip
        video.addEventListener('leavepictureinpicture', () => {
            // notify the top window that we had left pip
            window.top.postMessage('IframeTube_leftPip', '*');
            // stop looping the pip buttons function
            clearInterval(IframeTube_pip_buttons_interval);
        });
    }

    // enables the next and previous buttons for the PIP player
    let IframeTube_pip_buttons_timeout = false;
    function IframeTube_pip_buttons() {
        // target the video element
        let video = document.querySelector('video');
        if (!video) {
            // if it does not exist, retry in 100ms until it does
            clearTimeout(IframeTube_pip_buttons_timeout);
            IframeTube_pip_buttons_timeout = setTimeout(IframeTube_pip_buttons, 100);
            return;
        }

        // enable the next button and when clicked, notify the top window to play the next video
        navigator.mediaSession.setActionHandler("nexttrack", () => {
            window.top.postMessage('IframeTube_nextVideo', '*');
        });

        // if we are on a playlist
        if (IframeTube_playlist) {
            // enable the previous button and when clicked, notify the top window to play the previous video
            navigator.mediaSession.setActionHandler("previoustrack", () => {
                window.top.postMessage('IframeTube_previousVideo', '*');
            });
        }

        // otherwise, for non playlist videos, disable the previous button
        else {
            navigator.mediaSession.setActionHandler("previoustrack", null);
        }
    }

    // mutes the video inside the embedded player
    let IframeTube_video_mute_timeout = false;
    function IframTube_video_mute() {
        // target the video element
        let video = document.querySelector('video');
        // if it does not exist, retry in 100ms until it does
        if (!video) {
            clearTimeout(IframeTube_video_mute_timeout);
            IframeTube_video_mute_timeout = setTimeout(IframTube_video_mute, 100);
            return;
        }
        // mute the video
        video.muted = true;
    }

    // pauses the video inside the embedded player
    let IframeTube_video_pause_timeout = false;
    function IframeTube_video_pause() {
        let video = document.querySelector('video');
        // target the video element
        if (!video) {
            // if it does not exist, retry in 100ms until it does
            clearTimeout(IframeTube_video_pause_timeout);
            IframeTube_video_pause_timeout = setTimeout(IframeTube_video_pause, 100);
            return;
        }
        // pause the video
        video.pause();
    }

    // unmutes the video inside the embedded player
    function IframeTube_video_unmute() {
        // target the video element
        let video = document.querySelector('video');
        // if it exists, and the user has interacted with the document (hasFocus is the only reliable method)
        if (video && document.hasFocus()) {
            // unmute the video
            video.muted = false;
        }
    }

    // plays the video inside the embedded player
    function IframeTube_video_play() {
        // target the video element
        let video = document.querySelector('video');
        if (video) {
            // play the video
            video.play();
        }
    }

    // seek the video inside the embedded player to a certain time
    let IframeTube_video_seekTo_timeout = false;
    function IframeTube_video_seekTo(time) {
        // target the video element
        let video = document.querySelector('video');
        // if it does not exist, retry in 100ms until it does
        if (!video) {
            clearTimeout(IframeTube_video_seekTo_timeout);
            IframeTube_video_seekTo_timeout = setTimeout(() => IframeTube_video_seekTo(time), 100);
            return;
        }
        // skip to that time
        video.currentTime = time;
    }

    // loads a new video by ID (without reloading the embedded player)
    function IframeTube_api_loadVideoById(videoId, startSeconds) {
        // refetches the iframe api
        IframeTube_iframe_api = document.getElementById('movie_player')
        // if it exists, and load video by id is available
        if (IframeTube_iframe_api && IframeTube_iframe_api.loadVideoById) {

            // load a video by id, and set its start time
            IframeTube_iframe_api.loadVideoById({ 'videoId': videoId, 'startSeconds': startSeconds });

            // tell the top window to request the next video preview for that video
            window.top.postMessage('IframeTube_nextVideo_preview');

            // if we are on a playlist, also request the previous video preview for that video
            if (IframeTube_playlist) {
                window.top.postMessage('IframeTube_previousVideo_preview', '*');
            }

            // if autoplay is on, or we are on a playlist, hide the end screen
            if (IframeTube_autoPlay || IframeTube_playlist) {
                IframeTube_hideEndScreen();
            }
        }
    }

    // inits IframeTube inside the embedded player
    function IframeTube_embed_init() {
        IframeTube_player_style();
        IframeTube_player_customControls();
        IframeTube_player_customListeners();
        IframeTube_pip_handler();
        IframeTube_endScreenLinks();
        setInterval(IframeTube_endScreenLinks, 100);
        IframeTube_syncMainPlayer();
        setInterval(IframeTube_syncMainPlayer, 5000);

        // if we are in Firefox, listen for the 'beforeunload' event to reload the top window
        if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
            window.addEventListener('beforeunload', () => {
                window.top.location.reload();
            });
        }

        // otherwise, for other browsers, listen for the 'pagehide' event to reload the top window
        else {
            // if the iframe reloads, also reload the top window to prevent bugs
            window.addEventListener('pagehide', (event) => {
                // only do it if it’s a page reload, not when the user uses the back/forward buttons
                if (!event.persisted) {
                    window.top.location.reload();
                }
            });
        }

        // adds the listener for when the embedded player fully loads
        document.addEventListener('DOMContentLoaded', () => {

            window.top.postMessage('IframeTube_youtubePlayerLoaded', '*');

            window.top.postMessage('IframeTube_nextVideo_preview');

            window.top.postMessage('IframeTube_previousVideo_preview', '*');
        });

        // the DOMContentLoaded sometimes fires before the script loads, that is why we also check the document ready state
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            window.top.postMessage('IframeTube_youtubePlayerLoaded', '*');
            window.top.postMessage('IframeTube_nextVideo_preview');
            window.top.postMessage('IframeTube_previousVideo_preview', '*');
        }

        // add a listener for messages from the proxy iframe
        window.addEventListener('message', IframeTube_postMessageListener);
    }

    // calls the embed init function
    IframeTube_embed_init();

    // end of IIFE
})();