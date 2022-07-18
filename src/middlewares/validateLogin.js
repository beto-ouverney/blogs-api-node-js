const { errorsSchema } = require('../schemas/errorsSchema');

async function ValidateLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
   return res.status(errorsSchema.misssingFields.status)
   .json({ message: errorsSchema.misssingFields.message });
  }
  
    return next();
}

module.exports = { ValidateLogin };