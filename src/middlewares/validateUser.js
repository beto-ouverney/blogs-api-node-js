const { CustomError } = require('../helpers/CustomError');
const { userSchema } = require('../schemas/userSchema');

async function ValidateUser(req, res, next) {
  const user = req.body;
  const { error } = userSchema.validate(user);
  if (error) {
   throw new CustomError(400, error.message);
  }
  return next();
}

module.exports = { ValidateUser };