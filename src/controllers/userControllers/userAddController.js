const UserService = require('../../services/userServices/UserServices');

async function UserAddController(req, res) {
  const { displayName, email, password, image } = req.body;
  const user = { displayName, email, password, image };
  const token = await UserService.UserAddService(user);
  return res.status(201).json({ token });
}

module.exports = { UserAddController };