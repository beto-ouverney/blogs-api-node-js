const { Router } = require('express');
const UserControllers = require('../controllers/userControllers/UserControllers');
const { ValidateLogin } = require('../middlewares/validateLogin');

const userRoutes = Router();

userRoutes.post('/login', ValidateLogin, UserControllers.UserLoginController)
.post('/user', UserControllers.UserAddController);

module.exports = { userRoutes };