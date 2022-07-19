const UserServices = require('../../services/userServices/UserServices');

async function GetByIDUserController(req, res) {
  const { id } = req.params;
  const user = await UserServices.GetByIDUserService(id);
  return res.status(200).json(user);
}

module.exports = { GetByIDUserController };