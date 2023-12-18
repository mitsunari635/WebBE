import express, { response } from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import productController from "../controller/productController";
import policyController from "../controller/policyController";
import cartController from "../controller/cartController";
import orderController from "../controller/orderController";
import bannerController from "../controller/bannerController";
import newsController from "../controller/newsController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/lienson", (req, res) => {
    return res.send("Chào mừng");
  });
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-CRUD", homeController.displayGetCRUD);
  router.get("/edit-CRUD", homeController.getEditCRUD);
  router.get("/delete-CRUD", homeController.getDeleteCRUD);
  router.post("/put-CRUD", homeController.putCRUD);
  //User API
  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);
  router.get("/api/allcode", userController.getAllCodes);
  router.post("/api/send-contact-email", userController.sendContactEmail);

  //Product API
  router.get("/api/get-all-products", productController.handleGetAllProducts);
  router.post(
    "/api/create-new-product",
    productController.handleCreateNewProduct
  );
  router.put("/api/edit-product", productController.handleEditProduct);
  router.delete("/api/delete-product", productController.handleDeleteProduct);
  router.get("/api/allcode", productController.getAllCodes);

  router.get("/api/roll-paper-home", productController.getRollPaperHome);
  router.get("/api/photo-paper-home", productController.getPhotoPaperHome);
  router.get(
    "/api/perforated-paper-home",
    productController.getPerforatedPaperHome
  );
  router.get("/api/get-all-product-page", productController.getAllProductPage);
  router.get(
    "/api/get-all-detail-product",
    productController.getAllDetailProduct
  );
  router.get(
    "/api/get-detail-product-by-id",
    productController.getDetailProductById
  );
  router.post("/api/save-to-order", cartController.handleSaveToOrder);
  router.post("/api/save-info-product", productController.postInfoProduct);
  //Ordered product api
  router.get("/api/printed-paper-home", productController.getPrintedPaperHome);
  router.get("/api/printed-form-home", productController.getPrintedFormHome);
  router.get("/api/printed-roll-home", productController.getPrintedRollHome);
  router.get("/api/package-home", productController.getPackageHome);
  router.get("/api/envelope-home", productController.getEnvelopeHome);
  //Printed form api
  router.get("/api/document-home", productController.getDocumentHome);
  router.get("/api/import-export-home", productController.getImportExportHome);
  router.get("/api/express-home", productController.getExpressHome);
  router.get("/api/sea-air-bill-home", productController.getSeaAirBillHome);
  router.get("/api/paycheck-home", productController.getPaycheckHome);
  router.get("/api/atm-bill-home", productController.getAtmBillHome);
  router.get("/api/edc-bill-home", productController.getEdcBillHome);
  router.get("/api/other-print-home", productController.getOtherPrintHome);
  router.get("/api/label-stamp-home", productController.getLabelStampHome);
  router.get("/api/printed-roll-home", productController.getPrintedRollHome);
  //Policy api
  router.get("/api/get-all-policy", policyController.handleGetAllPolicy);
  router.post("/api/create-new-policy", policyController.handleCreateNewPolicy);
  router.put("/api/edit-policy", policyController.handleEditPolicy);
  router.delete("/api/delete-policy", policyController.handleDeletePolicy);
  router.get("/api/get-all-policy-page", policyController.getAllPolicyPage);
  router.get("/api/get-all-detail-policy", policyController.getAllDetailPolicy);
  router.get(
    "/api/get-detail-policy-by-id",
    policyController.getDetailPolicyById
  );
  router.post("/api/save-info-policy", policyController.postInfoPolicy);

  //Order api
  router.get("/api/get-order", orderController.handleGetOrder);
  router.delete("/api/delete-order", orderController.handleDeleteOrder);
  router.get("/api/get-detail-order", orderController.getOrderByNum);
  router.get("/api/get-by-order-number", orderController.handleGetUserByNumber);
  router.get("/api/allcode", orderController.getAllCodes);
  router.put("/api/edit-order-status", orderController.editOrderStatus);
  router.get("/api/check-new-order", orderController.handleCheckNewOrder);
  //rest api

  //Banner api
  router.get("/api/get-all-banner", bannerController.handleGetAllBanner);
  router.post("/api/create-new-banner", bannerController.handleCreateNewBanner);
  router.put("/api/edit-banner", bannerController.handleEditBanner);
  router.delete("/api/delete-banner", bannerController.handleDeleteBanner);
  router.get("/api/get-all-banner-page", bannerController.getAllBannerPage);

  //News api
  router.get("/api/get-all-news", newsController.handleGetAllNews);
  router.post("/api/create-new-news", newsController.handleCreateNewNews);
  router.put("/api/edit-news", newsController.handleEditNews);
  router.delete("/api/delete-news", newsController.handleDeleteNews);
  // router.get("/api/get-all-news-page", newsController.getAllPolicyPage);
  router.get("/api/get-all-detail-news", newsController.getAllDetailsNews);
  router.get("/api/get-detail-news-by-id", newsController.getDetailNewsById);
  router.post("/api/save-info-news", newsController.postInfoNews);

  return app.use("/", router);
};

module.exports = initWebRoutes;
