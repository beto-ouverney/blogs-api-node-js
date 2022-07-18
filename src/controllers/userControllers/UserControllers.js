const { UserLoginController } = require('./userLoginController');
const { UserAddController } = require('./userAddController');
const { GetAllUserController } = require('./getAllUserController');
const { GetByIDUserController } = require('./getByIDUserController');

module.exports = { UserLoginController, 
  UserAddController,
GetAllUserController,
GetByIDUserController };