const UserServices = require('../../services/userServices/UserServices');

async function GetAllUserController(req, res) {
  const users = await UserServices.GetAllUserService();
  res.status(200).json(users);
}

module.exports = { GetAllUserController };