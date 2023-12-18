import db from "../models/index";

let checkBannerName = (bannerName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let banner = await db.Banners.findOne({
        where: { name: bannerName },
      });
      if (banner) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllBanners = (bannerId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let banners = "";
      if (bannerId === "ALL") {
        banners = await db.Banners.findAll();
      }
      if (bannerId && bannerId !== "ALL") {
        banners = await db.Banners.findOne({
          where: { id: bannerId },
        });
      }
      resolve(banners);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check name is exist
      let check = await checkBannerName(data.name);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage:
            "Your banner name is already in use. Please try another name",
        });
      } else {
        await db.Banners.create({
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

let deleteBanner = (bannerId) => {
  return new Promise(async (resolve, reject) => {
    let foundBanner = await db.Banners.findOne({
      where: { id: bannerId },
    });
    if (!foundBanner) {
      resolve({
        errCode: 2,
        errMessage: `The banner isn't exist`,
      });
    }
    await db.Banners.destroy({
      where: { id: bannerId },
    });

    resolve({
      errCode: 0,
      errMessage: `The banner is deleted`,
    });
  });
};

let updateBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Missing require parameter",
        });
      }

      let banner = await db.Banners.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (banner) {
        banner.name = data.name;
        banner.image = data.image;

        await banner.save();

        resolve({
          errCode: 0,
          message: "Update banner success",
        });
      } else {
        resolve({
          errCode: 1,
          message: "banner not exist",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllDetailsBanner = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let banners = await db.Banners.findAll({
        limit: limitInput,
        order: [["createdAt", "ASC"]],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: banners,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllBanners: getAllBanners,
  createNewBanner: createNewBanner,
  deleteBanner: deleteBanner,
  updateBanner: updateBanner,
  getAllDetailsBanner: getAllDetailsBanner,
};
