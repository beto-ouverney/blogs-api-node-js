const { User } = require('../../database/models/index');
const { CustomError } = require('../../helpers/CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');
const { CreateToken } = require('../../helpers/token/createToken');

async function UserLoginService(email, password) {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) { 
    throw new CustomError(errorsSchema.invalidFields.status, errorsSchema.invalidFields.message); 
  }

  if (user.password !== password) { 
    throw new CustomError(errorsSchema.invalidFields.status, 
    errorsSchema.invalidFields.message); 
  }

  const token = CreateToken({ email, password });
  
  return token;
}

module.exports = { UserLoginService };
