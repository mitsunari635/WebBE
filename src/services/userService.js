import { resolveContent } from "nodemailer/lib/shared";
import db from "../models/index";
import bcrypt from "bcryptjs";
import mailService from "./mailService";

import { reject } from "lodash";
require("dotenv").config();
const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.Users.findOne({
          attributes: ["email", "roleId", "password", "fullName"],
          where: { email: email },
          raw: true,
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "Ok";

            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "User not found";
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = "Your email is not exist. Please try another one";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Users.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "ALL") {
        users = await db.Users.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (userId && userId !== "ALL") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
      }

      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};



let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data);
      //check email is exist
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "Your email is already in use. Please try another email",
        });
      } else {
        let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.Users.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          fullName: data.fullName,
          receiveAddress: data.receiveAddress,
          companyName: data.companyName,
          companyAddress: data.companyAddress,
          phoneNumber: data.phoneNumber,
          taxNumber: data.taxNumber,
          gender: data.gender,
          roleId: data.roleId,
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

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    let foundUser = await db.Users.findOne({
      where: { id: userId },
    });
    if (!foundUser) {
      resolve({
        errCode: 2,
        errMessage: `The user isn't exist`,
      });
    }
    await db.Users.destroy({
      where: { id: userId },
    });

    resolve({
      errCode: 0,
      errMessage: `The user is deleted`,
    });
  });
};

let updateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.roleId) {
        resolve({
          errCode: 2,
          errMessage: "Missing require parameter",
        });
      }

      let user = await db.Users.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (user) {
        user.email = data.email;
        user.fullName = data.fullName;
        user.receiveAddress = data.receiveAddress;
        user.companyName = data.companyName;
        user.companyAddress = data.companyAddress;
        user.roleId = data.roleId;
        user.gender = data.gender;
        user.phoneNumber = data.phoneNumber;
        user.taxNumber = data.taxNumber;
        user.image = data.image;

        await user.save();

        resolve({
          errCode: 0,
          message: "Update user success",
        });
      } else {
        resolve({
          errCode: 1,
          message: "User not exist",
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

let sendContactEmail = (data) => {
  let defaultEmail = "travelbito@gmail.com";
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.name || !data.phone || !data.content) {
        resolve({
          errCode: 1,
          errMessage: "Missing require parameter",
        });
      } else {
        if (!data.email) {
          data.email = defaultEmail;
        }
        await mailService.sendSimpleMail({
          senderCompany: data.company,
          senderName: data.name,
          senderPhone: data.phone,
          senderContent: data.content,
          senderImage: data.image,
        });
        //upsert data
        // let user = await db.Users.findOrCreate({
        //   where: { fullName: data.name },
        //   defaults: {
        //     company: data.company,
        //     phoneNumber: data.phone,
        //     roleId: "R3",
        //   },
        // });

        resolve({
          // data: user,
          errCode: 0,
          errMessage: "Create email success",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
  getAllCodesService: getAllCodesService,
  sendContactEmail: sendContactEmail,
  
};
