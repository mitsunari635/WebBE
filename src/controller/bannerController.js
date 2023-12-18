import bannerService from "../services/bannerService";

let handleGetAllBanner = async (req, res) => {
  let id = req.query.id; //ALL, id

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing parameter",
      banners: [],
    });
  }

  let banners = await bannerService.getAllBanners(id);

  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    banners,
  });
};

let handleCreateNewBanner = async (req, res) => {
  let message = await bannerService.createNewBanner(req.body);
  return res.status(200).json(message);
};

let handleEditBanner = async (req, res) => {
  let data = req.body;
  let message = await bannerService.updateBanner(data);
  return res.status(200).json(message);
};

let handleDeleteBanner = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameter",
    });
  }
  let message = await bannerService.deleteBanner(req.body.id);
  return res.status(200).json(message);
};

let getAllBannerPage = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 100;
  try {
    let response = await bannerService.getAllDetailsBanner(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

module.exports = {
  handleGetAllBanner: handleGetAllBanner,
  handleCreateNewBanner: handleCreateNewBanner,
  handleEditBanner: handleEditBanner,
  handleDeleteBanner: handleDeleteBanner,
  getAllBannerPage: getAllBannerPage,
};
