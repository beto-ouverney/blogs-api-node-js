const { User } = require('../../database/models/index');
const { getUserID } = require('../../helpers/getUserID');

async function DeleteUserService(token) {
  const id = await getUserID(token);
  await User.destroy({ where: { id } });
}

module.exports = { DeleteUserService };
