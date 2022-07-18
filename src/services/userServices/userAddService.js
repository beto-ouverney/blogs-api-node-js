const { User } = require('../../database/models/index');
const { CustomError } = require('../../helpers/CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');
const { CreateToken } = require('../../helpers/token/createToken');
const { userSchema } = require('../../schemas/userSchema');

async function UserAddService(user) {
  const { error } = userSchema.validate(user);
  if (error) {
    console.log('ERROR');
   throw new CustomError(400, error.message);
  }
  const userExists = await User.findOne({
    where: { email: user.email } });
    
  if (userExists) {
    throw new CustomError(errorsSchema
      .userAlreadyExists.status, errorsSchema.userAlreadyExists.message);
  }
  await User.create(user);
  const { password: _, ...userWithoutPassword } = user;

  const token = CreateToken(userWithoutPassword);
  return token;
}

module.exports = { UserAddService };