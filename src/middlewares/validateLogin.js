const { errorsSchema } = require('../schemas/errorsSchema');

async function ValidateLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
   return res.status(errorsSchema.missingFields.status)
   .json({ message: errorsSchema.missingFields.message });
  }
  
    return next();
}

module.exports = { ValidateLogin };