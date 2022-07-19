const jwt = require('jsonwebtoken');
const { CustomError } = require('../CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');
require('dotenv').config();

function VerifyToken(token) {
  return new Promise((resolve) => {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        throw new CustomError(errorsSchema.invalidToken.status, 
        errorsSchema.invalidToken.message);
      }
      resolve(decoded);
    });
  });
}

module.exports = { VerifyToken };