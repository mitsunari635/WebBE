require("dotenv").config();
import nodemailer from "nodemailer";
import fs from "fs";
import { Buffer } from "buffer";

let sendSimpleMail = async (dataSent) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: dataSent.senderEmail, // sender address
    to: "<khoitrongtran15@gmail.com>, <ctylienson@gmail.com>", // list of receivers
    subject: "Yêu cầu gọi lại", // Subject line
    html: `
        <h3>Tôi yêu cầu được gọi lại</h3>
        <p>Số điện thoại của tôi là: ${dataSent.senderPhone}</p>
        `, // html body
  });
};

module.exports = {
  sendSimpleMail: sendSimpleMail,
};
