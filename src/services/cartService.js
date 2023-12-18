import db from "../models/index";
require("dotenv").config();
let SaveToOrder = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const prevOrder = await db.Users.findOne({
        where: {
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
        },
      });
      if (prevOrder && prevOrder.orderNumber !== null) {
        let arrayNumber = prevOrder.orderNumber;
        arrayNumber.push(data.orderNumber);

        await db.Users.update(
          {
            orderNumber: arrayNumber,
            receiveAddress: data.receiveAddress,
            taxNumber: data.taxNumber,
            companyName: data.companyName,
            companyAddress: data.companyAddress,
            email: data.email,
          },
          {
            where: {
              fullName: data.fullName,
              phoneNumber: data.phoneNumber,
            },
          }
        );
      } else {
        await db.Users.findOrCreate({
          where: {
            email: data.email,
            fullName: data.fullName,
            phoneNumber: data.phoneNumber,
            receiveAddress: data.receiveAddress,
            taxNumber: data.taxNumber,
            companyName: data.companyName,
            companyAddress: data.companyAddress,
            roleId: "R3",
          },
          defaults: {
            orderNumber: [data.orderNumber],
          },
        });
      }
      await db.Orders.findOrCreate({
        where: { orderNumber: data.orderNumber },
        defaults: {
          address: data.receiveAddress,
          preTotal: data.preTotal,
          discount: data.discount,
          vat: data.vat,
          statusID: data.statusID,
          shipFee: data.shipFee,
          couponDiscount: data.couponDiscount,
          totalPrice: data.totalPrice,
          payment: data.payments,
          billPrinted: data.billPrinted,
        },
      });
      await db.DetailOrders.bulkCreate(data.description);
      resolve({
        errCode: 0,
        message: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  SaveToOrder: SaveToOrder,
};
