import db from "../models/index";
const cart = null;
let checkProductName = (productName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Products.findOne({
        where: { name: productName },
      });
      if (product) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllProducts = (productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = "";
      if (productId === "ALL") {
        products = await db.Products.findAll();
      }
      if (productId && productId !== "ALL") {
        products = await db.Products.findOne({
          where: { id: productId },
        });
      }
      resolve(products);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check name is exist
      let check = await checkProductName(data.name);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage:
            "Your product name is already in use. Please try another name",
        });
      } else {
        await db.Products.create({
          name: data.name,
          price: data.price,
          discount: data.discount,
          describe: data.describe,
          stockId: data.stockId,
          image: data.image,
          secondImage: data.secondImage,
          thirdImage: data.thirdImage,
          type: data.type,
        });
      }
      resolve({
        errCode: 0,
        message: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let deleteProduct = (productId) => {
  return new Promise(async (resolve, reject) => {
    let foundProduct = await db.Products.findOne({
      where: { id: productId },
      // include: [
      //   {
      //     model: db.Markdowns,
      //     attributes: ["contentHTML", "contentMarkdown"],
      //   },
      // ],
    });
    if (!foundProduct) {
      resolve({
        errCode: 2,
        errMessage: `The Product isn't exist`,
      });
    }
    await db.Products.destroy({
      where: { id: productId },
    });
    await db.Markdowns.destroy({
      where: { productId: productId },
    });

    resolve({
      errCode: 0,
      errMessage: `The Product is deleted`,
    });
  });
};

let updateProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.stockId) {
        resolve({
          errCode: 2,
          errMessage: "Missing require parameter",
        });
      }

      let product = await db.Products.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (product) {
        product.name = data.name;
        product.price = data.price;
        product.discount = data.discount;
        product.describe = data.describe;
        product.stockId = data.stockId;
        product.image = data.image;
        product.secondImage = data.secondImage;
        product.thirdImage = data.thirdImage;
        product.type = data.type;

        await product.save();

        resolve({
          errCode: 0,
          message: "Update product success",
        });
      } else {
        resolve({
          errCode: 1,
          message: "Product not exist",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllCodesService = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters",
        });
      } else {
        let res = {};
        let allcode = await db.Allcodes.findAll({
          where: { type: typeInput },
        });
        res.errCode = 0;
        res.data = allcode;
        resolve(res);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getRollPaperHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: ["cuộn", "cuộn nhiệt"] },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getPhotoPaperHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "photo" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getPerforatedPaperHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: ["đllt", "đl5l"] },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getPrintedPaperHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "in" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getPrintedFormHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "mẫu in" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getPrintedRollHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "cuộn in" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getLabelStampHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: ["nhãn", "tem"] },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getStampHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "tem" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getPackageHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "bao bì" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getEnvelopeHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "bao thư" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getDocumentHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "chứng từ" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getImportExportHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: ["phiếu nhập kho", "phiếu xuất kho"] },
        order: [["createdAt", "ASC"]],
        // attributes: {},s
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getExportHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "phiếu xuất kho" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getExpressHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "bill chuyển phát nhanh" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getSeaAirBillHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: ["bill sea", "bill air"] },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getAirBillHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "bill air" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getPaycheckHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "phiếu lương" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getAtmBillHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "hóa đơn atm" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getEdcBillHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "hóa đơn edc" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getOtherPrintHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        where: { type: "khác" },
        order: [["createdAt", "ASC"]],
        attributes: {},
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getAllDetailsProduct = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Products.findAll({
        limit: limitInput,
        order: [["type", "ASC"]],
        // attributes: {
        //   exclude: [
        //     { model: db.Product, as: "type", attributes: ["in"] },
        //   ]
        // },
        where: { type: ["cuộn", "đllt", "photo"] },
        include: [
          { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: products,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let saveDetailInforProduct = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputData.productId || !inputData.contentHTML || !inputData.action) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        if (inputData.action === "CREATE") {
          await db.Markdowns.create({
            contentHTML: inputData.contentHTML,
            contentMarkdown: inputData.contentMarkdown,
            description: inputData.description,
            productId: inputData.productId,
          });
        }
        if (inputData.action === "EDIT") {
          let productMarkdown = await db.Markdowns.findOne({
            where: { productId: inputData.productId },
            raw: false,
          });
          if (productMarkdown) {
            productMarkdown.contentHTML = inputData.contentHTML;
            productMarkdown.contentMarkdown = inputData.contentMarkdown;
            productMarkdown.description = inputData.description;
            await productMarkdown.save();
          }
        }
        resolve({
          errCode: 0,
          errMessage: "Save infor product success",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getDetailProductById = (inputId, inputName) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputId) {
        resolve({
          errCode: 1,
          errMessage: "Mising required parameter",
        });
      } else {
        let condition = {};
        if (inputId) {
          condition.id = inputId;
        }
        if (inputName) {
          condition.name = inputName;
        }
        let data = await db.Products.findOne({
          where: condition,
          // attributes: ['name'],
          include: [
            {
              model: db.Markdowns,
              attributes: ["description", "contentHTML", "contentMarkdown"],
            },
          ],
          raw: false,
          nest: true,
        });

        if (data && data.image) {
          data.image = new Buffer.from(data.image, "base64").toString("binary");
        }

        if (data && data.secondImage) {
          data.secondImage = new Buffer.from(
            data.secondImage,
            "base64"
          ).toString("binary");
        }

        if (data && data.thirdImage) {
          data.thirdImage = new Buffer.from(data.thirdImage, "base64").toString(
            "binary"
          );
        }

        if (!data) data = {};

        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
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
  getDetailProductById: getDetailProductById,
};
