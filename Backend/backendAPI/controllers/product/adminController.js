const asyncHandler = require('express-async-handler');
const Admin = require('../../model/productModel/productAdminModel');

const getAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.find();
  res.status(200).json(admin);
});

const postAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.create({
    adminName: req.body.adminName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    adminType: req.body.adminType,
    password: req.body.password
  })
  res.status(201).json(admin);
});

const putAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) {
    res.status(400)
    throw new Error('Admin Not Found')
  }

  const updateAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updateAdmin);
});

const deleteAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) {
    res.status(400)
    throw new Error('Admin Not Found')
  }

  await Admin.findOneAndDelete({ admin })
  res.status(200)
});

module.exports = {
  getAdmin,
  postAdmin,
  putAdmin,
  deleteAdmin
}