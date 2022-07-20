const { User } = require('../database/models/index');
const { VerifyToken } = require('./token/verifyToken');

async function getUserID(token) {
  const { data: { dataValues } } = await VerifyToken(token);
  const user = await User.findOne({ where: { email: dataValues.email } });
  return user.id;
}

module.exports = { getUserID };