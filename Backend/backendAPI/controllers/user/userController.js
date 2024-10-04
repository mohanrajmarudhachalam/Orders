const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');
const Users = require('../../model/userModel/userModel');


const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, password } = req.body
  if (!firstName || !lastName || !email || !phoneNumber || !address || !password) {
    res.status(400);
    throw new Error('Please Enter All Fields');
  }
  const userExist = await Users.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('User Already Exist');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await Users.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password: hashedPassword
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.firstName,
      email: user.email,
      token: generateJWT(user.id)
    });
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.firstName,
      email: user.email,
      token: generateJWT(user.id)
    });
  } else {
    res.status(400)
    throw new Error('Invalid Credentials');
  }
});

const getMe = asyncHandler(async(req, res) => {
  const { _id, firstName, email } = await Users.findById(req.user.id)

  res.status(200).json({
    id: _id,
    firstName,
    email
  });
});

const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}