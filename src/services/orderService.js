import db from "../models/index";
const { Op } = require("sequelize");
require("dotenv").config();

let getOrder = (orderId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let orders = "";
      if (orderId === "ALL") {
        orders = await db.Orders.findAll();
      }
      if (orderId && orderId !== "ALL") {
        orders = await db.Orders.findOne({
          where: { id: orderId },
        });
      }
      resolve(orders);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteOrder = (orderInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      let deleteOrder = await db.Orders.findOne({
        where: { id: orderInfo.id },
      });
      if (!deleteOrder) {
        resolve({
          errCode: 2,
          errMessage: `The order isn't exist`,
        });
      }
      await db.Orders.destroy({
        where: { id: orderInfo.id },
      });
      resolve({
        errCode: 0,
      });
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

let getOrderByNumber = (orderNum) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!orderNum) {
        resolve({
          errCode: 1,
          errMessage: "Mising required parameter",
        });
      } else {
        let data = await db.DetailOrders.findAll({
          where: {
            orderNumber: orderNum,
          },
          // attributes: {
          //     exclude: ['']
          // },
          include: [],
          raw: false,
          nest: true,
        });

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

let getUserByOrderNumber = (orderNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Users.findOne({
        where: {
          orderNumber: {
            [Op.contains]: [orderNumber],
          },
        },
      });
      resolve({
        errCode: 0,
        errMessage: "OK",
        user,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let editOrderStatus = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Missing require parameter",
        });
      }

      let order = await db.Orders.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (order) {
        order.statusID = data.statusID;

        await order.save();

        resolve({
          errCode: 0,
          message: "Update order status success",
        });
      } else {
        resolve({
          errCode: 1,
          message: "Update order status fail",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let checkNewOrder = async () => {
  try {
    let lastCheckedTime = new Date(); // Get current time
    let newOrders = await db.Orders.findAll({
      where: {
        createdAt: {
          [Op.gt]: lastCheckedTime, // Check for createdAt value greater than current time
        },
      },
    });
    return newOrders.length > 0;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getOrder: getOrder,
  getOrderByNumber: getOrderByNumber,
  deleteOrder: deleteOrder,
  getAllCodesService: getAllCodesService,
  getUserByOrderNumber: getUserByOrderNumber,
  editOrderStatus: editOrderStatus,
  checkNewOrder: checkNewOrder,
};
