import policyService from "../services/policyService";

let handleGetAllPolicy = async (req, res) => {
  let id = req.query.id; //ALL, id

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing parameter",
      policies: [],
    });
  }

  let policies = await policyService.getAllPolicy(id);

  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    policies,
  });
};

let handleCreateNewPolicy = async (req, res) => {
  let message = await policyService.createNewPolicy(req.body);
  return res.status(200).json(message);
};

let handleEditPolicy = async (req, res) => {
  let data = req.body;
  let message = await policyService.updatePolicy(data);
  return res.status(200).json(message);
};

let handleDeletePolicy = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameter",
    });
  }
  let message = await policyService.deletePolicy(req.body.id);
  return res.status(200).json(message);
};

let getAllPolicyPage = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let response = await policyService.getAllDetailsPolicy(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let postInfoPolicy = async (req, res) => {
  try {
    let response = await policyService.saveDetailInforPolicy(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let getDetailPolicyById = async (req, res) => {
  try {
    let info = await policyService.getDetailPolicyById(req.query.id);
    return res.status(200).json(info);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};


let getAllDetailPolicy = async (req, res) => {
  try {
    let Policy = await policyService.getAllDetailsPolicy(10);
    return res.status(200).json(Policy);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

module.exports = {
  handleGetAllPolicy: handleGetAllPolicy,
  handleCreateNewPolicy: handleCreateNewPolicy,
  handleEditPolicy: handleEditPolicy,
  handleDeletePolicy: handleDeletePolicy,
  postInfoPolicy: postInfoPolicy,
  getDetailPolicyById: getDetailPolicyById,
  getAllPolicyPage: getAllPolicyPage,
  getAllDetailPolicy: getAllDetailPolicy,
};
