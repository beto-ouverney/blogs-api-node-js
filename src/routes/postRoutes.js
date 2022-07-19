const { Router } = require('express');
const { CheckToken } = require('../middlewares/checkToken');
const PostControllers = require('../controllers/postControllers/PostControllers');

const postRoutes = Router();

postRoutes.post('/post', CheckToken, PostControllers.AddPostController)
.get('/post', CheckToken, PostControllers.GetAllPostController)
.get('/post/:id', CheckToken, PostControllers.GetByIDPostController)
.put('/post/:id', CheckToken, PostControllers.UpdatePostController);

module.exports = { postRoutes };