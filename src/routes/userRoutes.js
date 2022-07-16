const { Router } = require('express');
const UserControllers = require('../controllers/userControllers/UserControllers');
const { ValidateLogin } = require('../middlewares/validateLogin');

const userRoutes = Router();

userRoutes.post('/login', ValidateLogin, UserControllers.UserLoginController);

module.exports = { userRoutes };