const { Router } = require('express');
const { userRoutes } = require('./userRoutes');
const { categoryRoutes } = require('./categoryRoutes');
const { postRoutes } = require('./postRoutes');

const router = Router();

router.use(userRoutes);
router.use(categoryRoutes);
router.use(postRoutes);

module.exports = { router };
