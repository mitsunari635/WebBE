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
    subject: "Thông báo đặt hàng", // Subject line
    html: `
        <h3>Thông báo có đơn hàng mới</h3>
        <p>Tên khách hàng: ${dataSent.senderName}</p>
        <p>Số điện thoại khách hàng: ${dataSent.senderPhone}</p>
        <p>Mã đơn hàng: ${dataSent.senderOrderNumber}</p>
        `, // html body
  });
};

module.exports = {
  sendSimpleMail: sendSimpleMail,
};
