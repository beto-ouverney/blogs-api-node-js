const { VerifyToken } = require('../helpers/token/verifyToken');
const { CustomError } = require('../helpers/CustomError');
const { errorsSchema } = require('../schemas/errorsSchema');

async function CheckToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    throw new CustomError(errorsSchema.tokenNotFound.status, errorsSchema.tokenNotFound.message);
  }
  const credentials = await VerifyToken(token);
  if (!credentials) {
    throw new CustomError(errorsSchema.invalidToken.status, errorsSchema.invalidToken.message);
  }
  return next();
}

module.exports = { CheckToken };