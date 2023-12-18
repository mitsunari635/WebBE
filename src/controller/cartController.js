import cartService from "../services/cartService";
let handleSaveToOrder = async (req, res) => {
  try {
    let addedProduct = await cartService.SaveToOrder(req.body);
    // console.log(req.body)
    return res.status(200).json({
      addedProduct,
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Server not available",
    });
  }
};

module.exports = {
  handleSaveToOrder: handleSaveToOrder,
};
