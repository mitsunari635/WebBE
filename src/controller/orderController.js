import orderService from "../services/orderService";

let handleGetOrder = async (req, res) => {
  try {
    let orderId = req.query.id;
    let orders = await orderService.getOrder(orderId);
    return res.status(200).json({
      errCode: 0,
      errMessage: "OK",
      orders,
    });
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
  // io.emit("newOrder", { orderId: newOrder.id, message: "New order received" });
  // res.json({ success: true, message: "Order retrieved successfully" });
};

let handleDeleteOrder = async (req, res) => {
  let orderInfo = req.body;
  let message = await orderService.deleteOrder(orderInfo);
  return res.status(200).json(message);
};

let getOrderByNum = async (req, res) => {
  try {
    let number = req.query.number;
    let info = await orderService.getOrderByNumber(number);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let handleGetUserByNumber = async (req, res) => {
  let orderNumber = req.query.orderNumber;
  if (!orderNumber) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing parameter",
      users: [],
    });
  }
  let users = await orderService.getUserByOrderNumber(orderNumber);

  return res.status(200).json(users);
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

let editOrderStatus = async (req, res) => {
  let data = req.body;
  let message = await orderService.editOrderStatus(data);
  return res.status(200).json(message);
};

let handleCheckNewOrder = async (req, res) => {
  try {
    let hasNewOrders = await orderService.checkNewOrder();
    return res.status(200).json({
      hasNewOrders,
      errCode: 0,
      errMessage: "OK",
    });
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

module.exports = {
  handleGetOrder,
  handleDeleteOrder,
  getOrderByNum,
  handleGetUserByNumber: handleGetUserByNumber,
  getAllCodes: getAllCodes,
  editOrderStatus: editOrderStatus,
  handleCheckNewOrder: handleCheckNewOrder,
};
