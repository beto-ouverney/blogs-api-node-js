const { Router } = require('express');
const UserControllers = require('../controllers/userControllers/UserControllers');
const { ValidateLogin } = require('../middlewares/validateLogin');
const { CheckToken } = require('../middlewares/checkToken');

const userRoutes = Router();

userRoutes.post('/login', ValidateLogin, UserControllers.UserLoginController)
.post('/user', UserControllers.UserAddController)
.get('/user', CheckToken, UserControllers.GetAllUserController)
.get('/user/:id', CheckToken, UserControllers.GetByIDUserController)
.delete('/user/me', CheckToken, UserControllers.DeleteUserController);

module.exports = { userRoutes };