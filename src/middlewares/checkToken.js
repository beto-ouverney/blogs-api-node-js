const { VerifyToken } = require('../helpers/token/verifyToken');
const { CustomError } = require('../helpers/CustomError');
const { errorsSchema } = require('../schemas/errorsSchema');

async function CheckToken(req, res, next) {
  const { autorization } = req.headers;
  if (!autorization) {
    throw new CustomError(errorsSchema.tokenNotFound.status, errorsSchema.tokenNotFound.message);
  }
  const credentials = await VerifyToken(autorization);
  if (!credentials) {
    throw new CustomError(errorsSchema.invalidToken.status, errorsSchema.invalidToken.message);
  }
  return next();
}

module.exports = { CheckToken };