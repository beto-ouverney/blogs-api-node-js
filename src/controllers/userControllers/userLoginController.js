const UserServices = require('../../services/userServices/UserServices');

async function UserLoginController(req, res) {
  const { email, password } = req.body;
  const token = await UserServices.UserLoginService(email, password);
  return res.status(200).json({ token });
}

module.exports = { UserLoginController };