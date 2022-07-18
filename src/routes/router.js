const { Router } = require('express');
const { userRoutes } = require('./userRoutes');
const { categoryRoutes } = require('./categoryRoutes');

const router = Router();

router.use(userRoutes);
router.use(categoryRoutes);

module.exports = { router };
