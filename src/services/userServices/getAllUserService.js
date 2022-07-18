const { User } = require('../../database/models/index');

async function GetAllUserService() {
  const users = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );
  return users;
}

module.exports = { GetAllUserService };