const { User } = require('../../database/models/index');
const { VerifyToken } = require('../../helpers/token/verifyToken');

async function getUserId(token) {
  const credentials = await VerifyToken(token);
  return credentials.data.id;
}

async function DeleteUserService(token) {
  const userId = await getUserId(token);
  await User.destroy({ where: { id: userId } });
}

module.exports = { DeleteUserService };
