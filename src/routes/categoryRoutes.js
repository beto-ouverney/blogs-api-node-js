const { Router } = require('express');
const CategoryControllers = require('../controllers/categoryControllers/CategoryControllers');
const { CheckToken } = require('../middlewares/checkToken');

const categoryRoutes = Router();

categoryRoutes.post('/categories', CheckToken, CategoryControllers.AddCategoryController);

module.exports = { categoryRoutes };