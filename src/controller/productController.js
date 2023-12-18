import productService from "../services/productService";

let handleGetAllProducts = async (req, res) => {
  let id = req.query.id; //ALL, id

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing parameter",
      products: [],
    });
  }

  let products = await productService.getAllProducts(id);

  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    products,
  });
};

let handleCreateNewProduct = async (req, res) => {
  let message = await productService.createNewProduct(req.body);
  return res.status(200).json(message);
};

let handleEditProduct = async (req, res) => {
  let data = req.body;
  let message = await productService.updateProduct(data);
  return res.status(200).json(message);
};

let handleDeleteProduct = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameter",
    });
  }
  let message = await productService.deleteProduct(req.body.id);
  return res.status(200).json(message);
};

let getAllCodes = async (req, res) => {
  try {
    let data = await productService.getAllCodesService(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let getRollPaperHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getRollPaperHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getPhotoPaperHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getPhotoPaperHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getPerforatedPaperHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getPerforatedPaperHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getPrintedPaperHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getPrintedPaperHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getPrintedFormHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getPrintedFormHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getPrintedRollHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getPrintedRollHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getLabelStampHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getLabelStampHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getStampHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getStampHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getPackageHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getPackageHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getEnvelopeHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getEnvelopeHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getDocumentHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getDocumentHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getImportExportHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getImportExportHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

// let getExportHome = async (req, res) => {
//   let limit = req.query.limit;
//   if (!limit) limit = 50;
//   try {
//     let response = await productService.getExportHome(+limit);
//     return res.status(200).json(response);
//   } catch (e) {
//     console.log(e);
//     return res.status(200).json({
//       errCode: -1,
//       message: "Error from server",
//     });
//   }
// };

let getExpressHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getExpressHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getSeaAirBillHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getSeaAirBillHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

// let getAirBillHome = async (req, res) => {
//   let limit = req.query.limit;
//   if (!limit) limit = 50;
//   try {
//     let response = await productService.getAirBillHome(+limit);
//     return res.status(200).json(response);
//   } catch (e) {
//     console.log(e);
//     return res.status(200).json({
//       errCode: -1,
//       message: "Error from server",
//     });
//   }
// };

let getPaycheckHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getPaycheckHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getAtmBillHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getAtmBillHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getEdcBillHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getEdcBillHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getOtherPrintHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 50;
  try {
    let response = await productService.getOtherPrintHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getAllProductPage = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 100;
  try {
    let response = await productService.getAllDetailsProduct(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let postInfoProduct = async (req, res) => {
  try {
    let response = await productService.saveDetailInforProduct(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let getDetailProductById = async (req, res) => {
  try {
    let id = req.query.id;
    let name = req.query.name;
    let info = await productService.getDetailProductById(id);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let getAllDetailProduct = async (req, res) => {
  try {
    let products = await productService.getAllDetailsProduct();
    return res.status(200).json(products);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

module.exports = {
  handleGetAllProducts: handleGetAllProducts,
  handleCreateNewProduct: handleCreateNewProduct,
  handleEditProduct: handleEditProduct,
  handleDeleteProduct: handleDeleteProduct,
  getAllCodes: getAllCodes,

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
  // getExportHome: getExportHome,
  getExpressHome: getExpressHome,
  getSeaAirBillHome: getSeaAirBillHome,
  // getAirBillHome: getAirBillHome,
  getPaycheckHome: getPaycheckHome,
  getAtmBillHome: getAtmBillHome,
  getEdcBillHome: getEdcBillHome,
  getOtherPrintHome: getOtherPrintHome,
  getLabelStampHome: getLabelStampHome,
  getStampHome: getStampHome,

  postInfoProduct: postInfoProduct,
  getDetailProductById: getDetailProductById,
  getAllProductPage: getAllProductPage,
  getAllDetailProduct: getAllDetailProduct,
};
