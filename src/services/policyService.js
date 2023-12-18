import db from "../models/index";

let checkPolicyName = (PolicyName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let Policy = await db.Policies.findOne({
        where: { name: PolicyName },
      });
      if (Policy) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllPolicy = (policyId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let policies = "";
      if (policyId === "ALL") {
        policies = await db.Policies.findAll({});
      }
      if (policyId && policyId !== "ALL") {
        policies = await db.Policies.findOne({
          where: { id: policyId },
        });
      }

      resolve(policies);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewPolicy = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check name is exist
      let check = await checkPolicyName(data.name);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage:
            "Your Policy name is already in use. Please try another name",
        });
      } else {
        await db.Policies.create({
          name: data.name,
          type: data.type,
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

let deletePolicy = (policyId) => {
  return new Promise(async (resolve, reject) => {
    let foundPolicy = await db.Policies.findOne({
      where: { id: policyId },
    });
    if (!foundPolicy) {
      resolve({
        errCode: 2,
        errMessage: `The Policy isn't exist`,
      });
    }
    await db.Policies.destroy({
      where: { id: policyId },
    });
    await db.Markdowns.destroy({
      where: { policyId: policyId },
    });

    resolve({
      errCode: 0,
      errMessage: `The Policy is deleted`,
    });
  });
};

let updatePolicy = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Missing require parameter",
        });
      }

      let Policy = await db.Policies.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (Policy) {
        Policy.name = data.name;
        Policy.type = data.type;

        await Policy.save();

        resolve({
          errCode: 0,
          message: "Update Policy success",
        });
      } else {
        resolve({
          errCode: 1,
          message: "Policy not exist",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllDetailsPolicy = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let Policy = await db.Policies.findAll({
        limit: limitInput,
        order: [["createdAt", "ASC"]],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: Policy,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let saveDetailInforPolicy = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputData.policyId || !inputData.contentHTML || !inputData.action) {
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
            policyId: inputData.policyId,
          });
        }
        if (inputData.action === "EDIT") {
          let policyMarkdown = await db.Markdowns.findOne({
            where: { policyId: inputData.policyId },
            raw: false,
          });
          if (policyMarkdown) {
            policyMarkdown.contentHTML = inputData.contentHTML;
            policyMarkdown.contentMarkdown = inputData.contentMarkdown;
            policyMarkdown.description = inputData.description;
            await policyMarkdown.save();
          }
        }
        resolve({
          errCode: 0,
          errMessage: "Save infor Policy success",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getDetailPolicyById = (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputId) {
        resolve({
          errCode: 1,
          errMessage: "Mising required parameter",
        });
      } else {
        let data = await db.Policies.findOne({
          where: {
            id: inputId,
          },
          // attributes: {
          //     exclude: ['']
          // },
          include: [
            {
              model: db.Markdowns,
              attributes: ["description", "contentHTML", "contentMarkdown"],
            },
          ],
          raw: false,
          nest: true,
        });
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

// let getDetailPolicy = (typeInput) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let policy = await db.Policies.findAll({
//         limit: limitInput,
//         order: [["type", "ASC"]],
//         // attributes: {
//         //   exclude: [
//         //     { model: db.Product, as: "type", attributes: ["in"] },
//         //   ]
//         // },
//         where: { type: ["cuộn", "đllt", "photo"] },
//         include: [
//           { model: db.Allcodes, as: "stockData", attributes: ["valueVi"] },
//         ],
//         raw: true,
//         nest: true,
//       });

//       resolve({
//         errCode: 0,
//         data: products,
//       });
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

module.exports = {
  getAllPolicy: getAllPolicy,
  createNewPolicy: createNewPolicy,
  deletePolicy: deletePolicy,
  updatePolicy: updatePolicy,
  getAllDetailsPolicy: getAllDetailsPolicy,
  saveDetailInforPolicy: saveDetailInforPolicy,
  getDetailPolicyById: getDetailPolicyById,
};
