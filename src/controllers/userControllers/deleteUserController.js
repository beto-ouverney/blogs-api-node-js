const UserServices = require('../../services/userServices/UserServices');

async function DeleteUserController(req, res) {
  const token = req.headers.authorization;
  await UserServices.DeleteUserService(token);
  return res.status(204).send();
}

module.exports = { DeleteUserController };