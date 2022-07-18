const { Router } = require('express');
const UserControllers = require('../controllers/userControllers/UserControllers');
const { ValidateLogin } = require('../middlewares/validateLogin');
const { CheckToken } = require('../middlewares/checkToken');

const userRoutes = Router();

userRoutes.post('/login', ValidateLogin, UserControllers.UserLoginController)
.post('/user', UserControllers.UserAddController)
.get('/user', CheckToken, UserControllers.GetAllUserController);

module.exports = { userRoutes };