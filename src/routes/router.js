const { Router } = require('express');
const { userRoutes } = require('./userRoutes');

const router = Router();

router.use(userRoutes);

module.exports = { router };
