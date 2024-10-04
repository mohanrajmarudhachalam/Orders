const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Users = require('../model/userModel/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { // Because To verify the token Its starts with Beare
    try {
      token = req.headers.authorization.split(' ')[1]; // The second Element of the string is the start of the Token 

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await Users.findById(decoded.id).select('-password'); // Avoid Showing Password

      next();
    } catch(error) {
      console.log(error);
      res.status(401)
      throw new Error('Not Authorzied')
      
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('No Token Received')
  }
});

module.exports = {
  protect,
}