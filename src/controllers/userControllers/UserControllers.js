const { UserLoginController } = require('./userLoginController');
const { UserAddController } = require('./userAddController');
const { GetAllUserController } = require('./getAllUserController');
const { GetByIDUserController } = require('./getByIDUserController');
const { DeleteUserController } = require('./deleteUserController');

module.exports = { UserLoginController, 
  UserAddController,
GetAllUserController,
GetByIDUserController,
DeleteUserController };