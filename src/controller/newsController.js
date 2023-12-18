import newsService from "../services/newsService";

let handleGetAllNews = async (req, res) => {
  let id = req.query.id; //ALL, id

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing parameter",
      news: [],
    });
  }

  let news = await newsService.getAllNews(id);

  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    news,
  });
};

let handleCreateNewNews = async (req, res) => {
  let message = await newsService.createNewNews(req.body);
  return res.status(200).json(message);
};

let handleEditNews = async (req, res) => {
  let data = req.body;
  let message = await newsService.updateNews(data);
  return res.status(200).json(message);
};

let handleDeleteNews = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameter",
    });
  }
  let message = await newsService.deleteNews(req.body.id);
  return res.status(200).json(message);
};

let getDetailNewsById = async (req, res) => {
  try {
    let id = req.query.id;
    let info = await newsService.getDetailNewsById(id);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let postInfoNews = async (req, res) => {
  try {
    let response = await newsService.saveDetailInforNews(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let getAllDetailsNews = async (req, res) => {
  try {
    let news = await newsService.getAllDetailsNews(10);
    return res.status(200).json(news);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

module.exports = {
  handleGetAllNews: handleGetAllNews,
  handleCreateNewNews: handleCreateNewNews,
  handleEditNews: handleEditNews,
  handleDeleteNews: handleDeleteNews,
  getDetailNewsById: getDetailNewsById,
  postInfoNews: postInfoNews,
  getAllDetailsNews: getAllDetailsNews,
};
