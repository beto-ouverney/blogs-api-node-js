const { User } = require('../../database/models/index');
const { CustomError } = require('../../helpers/CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');

async function GetByIDUserService(id) {
  const user = await User.findOne({ where: { id },
    attributes: { exclude: ['password'] } });
    if (!user) {
      throw new CustomError(errorsSchema.userNotExist.status, errorsSchema.userNotExist.message);
    }
  return user;
}

module.exports = { GetByIDUserService };