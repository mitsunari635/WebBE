import db from "../models/index";

let createNewStock = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                image: data.image,
                name: data.name,
                price: data.price,
                discount: data.discount,
                stockID: data.stockID,
                describe: data.describe,
            })
            resolve({
                errCode: 0,
                message: 'OK'
            })
        } catch (e) {
            reject(e);
        }
    })
}