const { Router } = require('express');
const { CheckToken } = require('../middlewares/checkToken');
const PostControllers = require('../controllers/postControllers/PostControllers');

const postRoutes = Router();

postRoutes.post('/post', CheckToken, PostControllers.AddPostController);

module.exports = { postRoutes };