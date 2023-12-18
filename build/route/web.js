"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireWildcard(require("express"));
var _homeController = _interopRequireDefault(require("../controller/homeController"));
var _userController = _interopRequireDefault(require("../controller/userController"));
var _productController = _interopRequireDefault(require("../controller/productController"));
var _policyController = _interopRequireDefault(require("../controller/policyController"));
var _cartController = _interopRequireDefault(require("../controller/cartController"));
var _orderController = _interopRequireDefault(require("../controller/orderController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = _express["default"].Router();
var initWebRoutes = function initWebRoutes(app) {
  router.get("/", _homeController["default"].getHomePage);
  router.get("/lienson", function (req, res) {
    return res.send("Chào mừng");
  });
  router.get("/crud", _homeController["default"].getCRUD);
  router.post("/post-crud", _homeController["default"].postCRUD);
  router.get("/get-CRUD", _homeController["default"].displayGetCRUD);
  router.get("/edit-CRUD", _homeController["default"].getEditCRUD);
  router.get("/delete-CRUD", _homeController["default"].getDeleteCRUD);
  router.post("/put-CRUD", _homeController["default"].putCRUD);
  //User API
  router.post("/api/login", _userController["default"].handleLogin);
  router.get("/api/get-all-users", _userController["default"].handleGetAllUsers);
  router.post("/api/create-new-user", _userController["default"].handleCreateNewUser);
  router.put("/api/edit-user", _userController["default"].handleEditUser);
  router["delete"]("/api/delete-user", _userController["default"].handleDeleteUser);
  router.get("/api/allcode", _userController["default"].getAllCodes);
  router.post("/api/send-contact-email", _userController["default"].sendContactEmail);

  //Product API
  router.get("/api/get-all-products", _productController["default"].handleGetAllProducts);
  router.post("/api/create-new-product", _productController["default"].handleCreateNewProduct);
  router.put("/api/edit-product", _productController["default"].handleEditProduct);
  router["delete"]("/api/delete-product", _productController["default"].handleDeleteProduct);
  router.get("/api/allcode", _productController["default"].getAllCodes);
  router.get("/api/roll-paper-home", _productController["default"].getRollPaperHome);
  router.get("/api/photo-paper-home", _productController["default"].getPhotoPaperHome);
  router.get("/api/perforated-paper-home", _productController["default"].getPerforatedPaperHome);
  router.get("/api/get-all-product-page", _productController["default"].getAllProductPage);
  router.get("/api/get-all-detail-product", _productController["default"].getAllDetailProduct);
  router.get("/api/get-detail-product-by-id", _productController["default"].getDetailProductById);
  router.post("/api/save-to-order", _cartController["default"].handleSaveToOrder);
  router.post("/api/save-info-product", _productController["default"].postInfoProduct);
  //Ordered product api
  router.get("/api/printed-paper-home", _productController["default"].getPrintedPaperHome);
  router.get("/api/printed-form-home", _productController["default"].getPrintedFormHome);
  router.get("/api/printed-roll-home", _productController["default"].getPrintedRollHome);
  router.get("/api/package-home", _productController["default"].getPackageHome);
  router.get("/api/envelope-home", _productController["default"].getEnvelopeHome);
  //Printed form api
  router.get("/api/document-home", _productController["default"].getDocumentHome);
  router.get("/api/import-export-home", _productController["default"].getImportExportHome);
  router.get("/api/express-home", _productController["default"].getExpressHome);
  router.get("/api/sea-air-bill-home", _productController["default"].getSeaAirBillHome);
  router.get("/api/paycheck-home", _productController["default"].getPaycheckHome);
  router.get("/api/atm-bill-home", _productController["default"].getAtmBillHome);
  router.get("/api/edc-bill-home", _productController["default"].getEdcBillHome);
  router.get("/api/other-print-home", _productController["default"].getOtherPrintHome);
  router.get("/api/label-stamp-home", _productController["default"].getLabelStampHome);
  router.get("/api/printed-roll-home", _productController["default"].getPrintedRollHome);
  //Policy api
  router.get("/api/get-all-policy", _policyController["default"].handleGetAllPolicy);
  router.post("/api/create-new-policy", _policyController["default"].handleCreateNewPolicy);
  router.put("/api/edit-policy", _policyController["default"].handleEditPolicy);
  router["delete"]("/api/delete-policy", _policyController["default"].handleDeletePolicy);
  router.get("/api/get-all-policy-page", _policyController["default"].getAllPolicyPage);
  router.get("/api/get-all-detail-policy", _policyController["default"].getAllDetailPolicy);
  router.get("/api/get-detail-policy-by-id", _policyController["default"].getDetailPolicyById);
  router.post("/api/save-info-policy", _policyController["default"].postInfoPolicy);

  //Order api
  router.get("/api/get-order", _orderController["default"].handleGetOrder);
  router["delete"]("/api/delete-order", _orderController["default"].handleDeleteOrder);
  router.get("/api/get-detail-order", _orderController["default"].getOrderByNum);
  router.get("/api/get-by-order-number", _orderController["default"].handleGetUserByNumber);
  router.get("/api/allcode", _orderController["default"].getAllCodes);
  router.put("/api/edit-order-status", _orderController["default"].editOrderStatus);
  //rest api
  return app.use("/", router);
};
module.exports = initWebRoutes;