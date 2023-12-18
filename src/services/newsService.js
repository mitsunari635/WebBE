import db from "../models/index";

let checkNewsName = (newsName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let news = await db.News.findOne({
        where: { name: newsName },
      });
      if (news) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllNews = (newsId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let news = "";
      if (newsId === "ALL") {
        news = await db.News.findAll();
      }
      if (newsId && newsId !== "ALL") {
        news = await db.News.findOne({
          where: { id: newsId },
        });
      }
      resolve(news);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewNews = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check name is exist
      let check = await checkNewsName(data.name);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage:
            "Your New name is already in use. Please try another name",
        });
      } else {
        await db.News.create({
          name: data.name,
          image: data.image,
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

let deleteNews = (newsId) => {
  return new Promise(async (resolve, reject) => {
    let foundNews = await db.News.findOne({
      where: { id: newsId },
      // include: [
      //   {
      //     model: db.Markdowns,
      //     attributes: ["description", "contentHTML", "contentMarkdown"],
      //   },
      // ],
    });
    if (!foundNews) {
      resolve({
        errCode: 2,
        errMessage: `The New isn't exist`,
      });
    }
    await db.News.destroy({
      where: { id: newsId },
    });

    await db.Markdowns.destroy({
      where: { newsId: newsId },
    });
    resolve({
      errCode: 0,
      errMessage: `The New is deleted`,
    });
  });
};

let updateNews = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Missing require parameter",
        });
      }

      let news = await db.News.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (news) {
        news.name = data.name;
        news.image = data.image;

        await news.save();

        resolve({
          errCode: 0,
          message: "Update news success",
        });
      } else {
        resolve({
          errCode: 1,
          message: "News not exist",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllDetailsNews = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let news = await db.News.findAll({
        limit: limitInput,
        order: [["createdAt", "ASC"]],
        // where: { id: inputId },
        include: [
          {
            model: db.Markdowns,
            attributes: ["description"],
          },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: news,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let saveDetailInforNews = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputData.newsId || !inputData.contentHTML || !inputData.action) {
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
            newsId: inputData.newsId,
          });
        }
        if (inputData.action === "EDIT") {
          let NewMarkdown = await db.Markdowns.findOne({
            where: { newsId: inputData.newsId },
            raw: false,
          });
          if (NewMarkdown) {
            NewMarkdown.contentHTML = inputData.contentHTML;
            NewMarkdown.contentMarkdown = inputData.contentMarkdown;
            NewMarkdown.description = inputData.description;
            await NewMarkdown.save();
          }
        }
        resolve({
          errCode: 0,
          errMessage: "Save news infor success",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getDetailNewsById = (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputId) {
        resolve({
          errCode: 1,
          errMessage: "Mising required parameter",
        });
      } else {
        let data = await db.News.findOne({
          where: { id: inputId },
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
  getAllNews: getAllNews,
  createNewNews: createNewNews,
  deleteNews: deleteNews,
  updateNews: updateNews,
  getAllDetailsNews: getAllDetailsNews,
  saveDetailInforNews: saveDetailInforNews,
  getDetailNewsById: getDetailNewsById,
};
