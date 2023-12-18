"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var cart = null;
var checkProductName = function checkProductName(productName) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var product;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].Products.findOne({
              where: {
                name: productName
              }
            });
          case 3:
            product = _context.sent;
            if (product) {
              resolve(true);
            } else {
              resolve(false);
            }
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getAllProducts = function getAllProducts(productId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            products = "";
            if (!(productId === "ALL")) {
              _context2.next = 6;
              break;
            }
            _context2.next = 5;
            return _index["default"].Products.findAll();
          case 5:
            products = _context2.sent;
          case 6:
            if (!(productId && productId !== "ALL")) {
              _context2.next = 10;
              break;
            }
            _context2.next = 9;
            return _index["default"].Products.findOne({
              where: {
                id: productId
              }
            });
          case 9:
            products = _context2.sent;
          case 10:
            resolve(products);
            _context2.next = 16;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var createNewProduct = function createNewProduct(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var check;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return checkProductName(data.name);
          case 3:
            check = _context3.sent;
            if (!(check === true)) {
              _context3.next = 8;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Your product name is already in use. Please try another name"
            });
            _context3.next = 10;
            break;
          case 8:
            _context3.next = 10;
            return _index["default"].Products.create({
              name: data.name,
              price: data.price,
              discount: data.discount,
              describe: data.describe,
              stockId: data.stockId,
              image: data.image,
              secondImage: data.secondImage,
              thirdImage: data.thirdImage,
              type: data.type
            });
          case 10:
            resolve({
              errCode: 0,
              message: "OK"
            });
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var deleteProduct = function deleteProduct(productId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var foundProduct;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _index["default"].Products.findOne({
              where: {
                id: productId
              }
              // include: [
              //   {
              //     model: db.Markdowns,
              //     attributes: ["contentHTML", "contentMarkdown"],
              //   },
              // ],
            });
          case 2:
            foundProduct = _context4.sent;
            if (!foundProduct) {
              resolve({
                errCode: 2,
                errMessage: "The Product isn't exist"
              });
            }
            _context4.next = 6;
            return _index["default"].Products.destroy({
              where: {
                id: productId
              }
            });
          case 6:
            // await db.Markdowns.destroy({
            //   where: { id: foundProduct.Product.id },
            // });

            // if (foundProduct.Markdowns) {
            //   await foundProduct.Markdown.destroy();
            // }

            resolve({
              errCode: 0,
              errMessage: "The Product is deleted"
            });
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var updateProduct = function updateProduct(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var product;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (!data.id || !data.stockId) {
              resolve({
                errCode: 2,
                errMessage: "Missing require parameter"
              });
            }
            _context5.next = 4;
            return _index["default"].Products.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 4:
            product = _context5.sent;
            if (!product) {
              _context5.next = 20;
              break;
            }
            product.name = data.name;
            product.price = data.price;
            product.discount = data.discount;
            product.describe = data.describe;
            product.stockId = data.stockId;
            product.image = data.image;
            product.secondImage = data.secondImage;
            product.thirdImage = data.thirdImage;
            product.type = data.type;
            _context5.next = 17;
            return product.save();
          case 17:
            resolve({
              errCode: 0,
              message: "Update product success"
            });
            _context5.next = 21;
            break;
          case 20:
            resolve({
              errCode: 1,
              message: "Product not exist"
            });
          case 21:
            _context5.next = 26;
            break;
          case 23:
            _context5.prev = 23;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 26:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 23]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var getAllCodesService = function getAllCodesService(typeInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var res, allcode;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            if (typeInput) {
              _context6.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing required parameters"
            });
            _context6.next = 12;
            break;
          case 5:
            res = {};
            _context6.next = 8;
            return _index["default"].Allcodes.findAll({
              where: {
                type: typeInput
              }
            });
          case 8:
            allcode = _context6.sent;
            res.errCode = 0;
            res.data = allcode;
            resolve(res);
          case 12:
            _context6.next = 17;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 17:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 14]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var getRollPaperHome = function getRollPaperHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: ["cuộn", "cuộn nhiệt"]
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context7.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context7.next = 10;
            break;
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 7]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getPhotoPaperHome = function getPhotoPaperHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "photo"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context8.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context8.next = 10;
            break;
          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 10:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 7]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var getPerforatedPaperHome = function getPerforatedPaperHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: ["đllt", "đl5l"]
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context9.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context9.next = 10;
            break;
          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 10:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 7]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var getPrintedPaperHome = function getPrintedPaperHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "in"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context10.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context10.next = 10;
            break;
          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            reject(_context10.t0);
          case 10:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 7]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var getPrintedFormHome = function getPrintedFormHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "mẫu in"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context11.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context11.next = 10;
            break;
          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](0);
            reject(_context11.t0);
          case 10:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 7]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var getPrintedRollHome = function getPrintedRollHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "cuộn in"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context12.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context12.next = 10;
            break;
          case 7:
            _context12.prev = 7;
            _context12.t0 = _context12["catch"](0);
            reject(_context12.t0);
          case 10:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 7]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var getLabelStampHome = function getLabelStampHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: ["nhãn", "tem"]
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context13.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context13.next = 10;
            break;
          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13["catch"](0);
            reject(_context13.t0);
          case 10:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 7]]);
    }));
    return function (_x25, _x26) {
      return _ref13.apply(this, arguments);
    };
  }());
};
var getStampHome = function getStampHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "tem"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context14.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context14.next = 10;
            break;
          case 7:
            _context14.prev = 7;
            _context14.t0 = _context14["catch"](0);
            reject(_context14.t0);
          case 10:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 7]]);
    }));
    return function (_x27, _x28) {
      return _ref14.apply(this, arguments);
    };
  }());
};
var getPackageHome = function getPackageHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "bao bì"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context15.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context15.next = 10;
            break;
          case 7:
            _context15.prev = 7;
            _context15.t0 = _context15["catch"](0);
            reject(_context15.t0);
          case 10:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[0, 7]]);
    }));
    return function (_x29, _x30) {
      return _ref15.apply(this, arguments);
    };
  }());
};
var getEnvelopeHome = function getEnvelopeHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "bao thư"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context16.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context16.next = 10;
            break;
          case 7:
            _context16.prev = 7;
            _context16.t0 = _context16["catch"](0);
            reject(_context16.t0);
          case 10:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[0, 7]]);
    }));
    return function (_x31, _x32) {
      return _ref16.apply(this, arguments);
    };
  }());
};
var getDocumentHome = function getDocumentHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "chứng từ"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context17.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context17.next = 10;
            break;
          case 7:
            _context17.prev = 7;
            _context17.t0 = _context17["catch"](0);
            reject(_context17.t0);
          case 10:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[0, 7]]);
    }));
    return function (_x33, _x34) {
      return _ref17.apply(this, arguments);
    };
  }());
};
var getImportExportHome = function getImportExportHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: ["phiếu nhập kho", "phiếu xuất kho"]
              },
              order: [["createdAt", "ASC"]],
              // attributes: {},s
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context18.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context18.next = 10;
            break;
          case 7:
            _context18.prev = 7;
            _context18.t0 = _context18["catch"](0);
            reject(_context18.t0);
          case 10:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[0, 7]]);
    }));
    return function (_x35, _x36) {
      return _ref18.apply(this, arguments);
    };
  }());
};
var getExportHome = function getExportHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "phiếu xuất kho"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context19.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context19.next = 10;
            break;
          case 7:
            _context19.prev = 7;
            _context19.t0 = _context19["catch"](0);
            reject(_context19.t0);
          case 10:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[0, 7]]);
    }));
    return function (_x37, _x38) {
      return _ref19.apply(this, arguments);
    };
  }());
};
var getExpressHome = function getExpressHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            _context20.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "bill chuyển phát nhanh"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context20.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context20.next = 10;
            break;
          case 7:
            _context20.prev = 7;
            _context20.t0 = _context20["catch"](0);
            reject(_context20.t0);
          case 10:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[0, 7]]);
    }));
    return function (_x39, _x40) {
      return _ref20.apply(this, arguments);
    };
  }());
};
var getSeaAirBillHome = function getSeaAirBillHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            _context21.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: ["bill sea", "bill air"]
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context21.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context21.next = 10;
            break;
          case 7:
            _context21.prev = 7;
            _context21.t0 = _context21["catch"](0);
            reject(_context21.t0);
          case 10:
          case "end":
            return _context21.stop();
        }
      }, _callee21, null, [[0, 7]]);
    }));
    return function (_x41, _x42) {
      return _ref21.apply(this, arguments);
    };
  }());
};
var getAirBillHome = function getAirBillHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            _context22.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "bill air"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context22.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context22.next = 10;
            break;
          case 7:
            _context22.prev = 7;
            _context22.t0 = _context22["catch"](0);
            reject(_context22.t0);
          case 10:
          case "end":
            return _context22.stop();
        }
      }, _callee22, null, [[0, 7]]);
    }));
    return function (_x43, _x44) {
      return _ref22.apply(this, arguments);
    };
  }());
};
var getPaycheckHome = function getPaycheckHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            _context23.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "phiếu lương"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context23.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context23.next = 10;
            break;
          case 7:
            _context23.prev = 7;
            _context23.t0 = _context23["catch"](0);
            reject(_context23.t0);
          case 10:
          case "end":
            return _context23.stop();
        }
      }, _callee23, null, [[0, 7]]);
    }));
    return function (_x45, _x46) {
      return _ref23.apply(this, arguments);
    };
  }());
};
var getAtmBillHome = function getAtmBillHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            _context24.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "hóa đơn atm"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context24.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context24.next = 10;
            break;
          case 7:
            _context24.prev = 7;
            _context24.t0 = _context24["catch"](0);
            reject(_context24.t0);
          case 10:
          case "end":
            return _context24.stop();
        }
      }, _callee24, null, [[0, 7]]);
    }));
    return function (_x47, _x48) {
      return _ref24.apply(this, arguments);
    };
  }());
};
var getEdcBillHome = function getEdcBillHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            _context25.prev = 0;
            _context25.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "hóa đơn edc"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context25.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context25.next = 10;
            break;
          case 7:
            _context25.prev = 7;
            _context25.t0 = _context25["catch"](0);
            reject(_context25.t0);
          case 10:
          case "end":
            return _context25.stop();
        }
      }, _callee25, null, [[0, 7]]);
    }));
    return function (_x49, _x50) {
      return _ref25.apply(this, arguments);
    };
  }());
};
var getOtherPrintHome = function getOtherPrintHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            _context26.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              where: {
                type: "khác"
              },
              order: [["createdAt", "ASC"]],
              attributes: {},
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context26.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context26.next = 10;
            break;
          case 7:
            _context26.prev = 7;
            _context26.t0 = _context26["catch"](0);
            reject(_context26.t0);
          case 10:
          case "end":
            return _context26.stop();
        }
      }, _callee26, null, [[0, 7]]);
    }));
    return function (_x51, _x52) {
      return _ref26.apply(this, arguments);
    };
  }());
};
var getAllDetailsProduct = function getAllDetailsProduct(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(resolve, reject) {
      var products;
      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
        while (1) switch (_context27.prev = _context27.next) {
          case 0:
            _context27.prev = 0;
            _context27.next = 3;
            return _index["default"].Products.findAll({
              limit: limitInput,
              order: [["type", "ASC"]],
              // attributes: {
              //   exclude: [
              //     { model: db.Product, as: "type", attributes: ["in"] },
              //   ]
              // },
              where: {
                type: ["cuộn", "đllt", "photo"]
              },
              include: [{
                model: _index["default"].Allcodes,
                as: "stockData",
                attributes: ["valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            products = _context27.sent;
            resolve({
              errCode: 0,
              data: products
            });
            _context27.next = 10;
            break;
          case 7:
            _context27.prev = 7;
            _context27.t0 = _context27["catch"](0);
            reject(_context27.t0);
          case 10:
          case "end":
            return _context27.stop();
        }
      }, _callee27, null, [[0, 7]]);
    }));
    return function (_x53, _x54) {
      return _ref27.apply(this, arguments);
    };
  }());
};
var saveDetailInforProduct = function saveDetailInforProduct(inputData) {
  return new Promise( /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(resolve, reject) {
      var productMarkdown;
      return _regeneratorRuntime().wrap(function _callee28$(_context28) {
        while (1) switch (_context28.prev = _context28.next) {
          case 0:
            _context28.prev = 0;
            if (!(!inputData.productId || !inputData.contentHTML || !inputData.action)) {
              _context28.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing parameter"
            });
            _context28.next = 19;
            break;
          case 5:
            if (!(inputData.action === "CREATE")) {
              _context28.next = 8;
              break;
            }
            _context28.next = 8;
            return _index["default"].Markdowns.create({
              contentHTML: inputData.contentHTML,
              contentMarkdown: inputData.contentMarkdown,
              description: inputData.description,
              productId: inputData.productId
            });
          case 8:
            if (!(inputData.action === "EDIT")) {
              _context28.next = 18;
              break;
            }
            _context28.next = 11;
            return _index["default"].Markdowns.findOne({
              where: {
                productId: inputData.productId
              },
              raw: false
            });
          case 11:
            productMarkdown = _context28.sent;
            if (!productMarkdown) {
              _context28.next = 18;
              break;
            }
            productMarkdown.contentHTML = inputData.contentHTML;
            productMarkdown.contentMarkdown = inputData.contentMarkdown;
            productMarkdown.description = inputData.description;
            _context28.next = 18;
            return productMarkdown.save();
          case 18:
            resolve({
              errCode: 0,
              errMessage: "Save infor product success"
            });
          case 19:
            _context28.next = 24;
            break;
          case 21:
            _context28.prev = 21;
            _context28.t0 = _context28["catch"](0);
            reject(_context28.t0);
          case 24:
          case "end":
            return _context28.stop();
        }
      }, _callee28, null, [[0, 21]]);
    }));
    return function (_x55, _x56) {
      return _ref28.apply(this, arguments);
    };
  }());
};
var getDetailProductById = function getDetailProductById(inputId, inputName) {
  return new Promise( /*#__PURE__*/function () {
    var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(resolve, reject) {
      var condition, data;
      return _regeneratorRuntime().wrap(function _callee29$(_context29) {
        while (1) switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            if (inputId) {
              _context29.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Mising required parameter"
            });
            _context29.next = 16;
            break;
          case 5:
            condition = {};
            if (inputId) {
              condition.id = inputId;
            }
            if (inputName) {
              condition.name = inputName;
            }
            _context29.next = 10;
            return _index["default"].Products.findOne({
              where: condition,
              // attributes: ['name'],
              include: [{
                model: _index["default"].Markdowns,
                attributes: ["description", "contentHTML", "contentMarkdown"]
              }],
              raw: false,
              nest: true
            });
          case 10:
            data = _context29.sent;
            if (data && data.image) {
              data.image = new Buffer.from(data.image, "base64").toString("binary");
            }
            if (data && data.secondImage) {
              data.secondImage = new Buffer.from(data.secondImage, "base64").toString("binary");
            }
            if (data && data.thirdImage) {
              data.thirdImage = new Buffer.from(data.thirdImage, "base64").toString("binary");
            }
            if (!data) data = {};
            resolve({
              errCode: 0,
              data: data
            });
          case 16:
            _context29.next = 21;
            break;
          case 18:
            _context29.prev = 18;
            _context29.t0 = _context29["catch"](0);
            reject(_context29.t0);
          case 21:
          case "end":
            return _context29.stop();
        }
      }, _callee29, null, [[0, 18]]);
    }));
    return function (_x57, _x58) {
      return _ref29.apply(this, arguments);
    };
  }());
};
module.exports = {
  getAllProducts: getAllProducts,
  createNewProduct: createNewProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
  getAllCodesService: getAllCodesService,
  getRollPaperHome: getRollPaperHome,
  getPhotoPaperHome: getPhotoPaperHome,
  getPerforatedPaperHome: getPerforatedPaperHome,
  getPrintedPaperHome: getPrintedPaperHome,
  getPrintedFormHome: getPrintedFormHome,
  getPrintedRollHome: getPrintedRollHome,
  getPackageHome: getPackageHome,
  getEnvelopeHome: getEnvelopeHome,
  getDocumentHome: getDocumentHome,
  getImportExportHome: getImportExportHome,
  getExportHome: getExportHome,
  getExpressHome: getExpressHome,
  getSeaAirBillHome: getSeaAirBillHome,
  getAirBillHome: getAirBillHome,
  getPaycheckHome: getPaycheckHome,
  getAtmBillHome: getAtmBillHome,
  getEdcBillHome: getEdcBillHome,
  getOtherPrintHome: getOtherPrintHome,
  getLabelStampHome: getLabelStampHome,
  getStampHome: getStampHome,
  getAllDetailsProduct: getAllDetailsProduct,
  saveDetailInforProduct: saveDetailInforProduct,
  getDetailProductById: getDetailProductById
};