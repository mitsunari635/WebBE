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
    to: "<khoitrongtran15@gmail.com>", // list of receivers
    subject: "Liên hệ đặt hàng", // Subject line
    html: `
        <h3>Xin chào, tôi tên: ${dataSent.senderName}</h3>
        <p>Tôi tới từ công ty: ${dataSent.senderCompany}</p>
        <p>Tôi cần hỗ trợ: ${dataSent.senderContent}</p>
        <p>Số điện thoại của tôi là: ${dataSent.senderPhone}</p>
        <p>Hình ảnh đính kèm ở dưới</p>
        <p>Rất mong được nhận phản hồi của anh / chị</p>
        `, // html body
    attachments: {
      path: dataSent.senderImage,
    },
  });
};

module.exports = {
  sendSimpleMail: sendSimpleMail,
};
