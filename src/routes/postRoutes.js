const { Router } = require('express');
const { CheckToken } = require('../middlewares/checkToken');
const PostControllers = require('../controllers/postControllers/PostControllers');

const postRoutes = Router();

postRoutes.get('/post/search', CheckToken, PostControllers.SearchPostController)
.post('/post', CheckToken, PostControllers.AddPostController)
.put('/post/:id', CheckToken, PostControllers.UpdatePostController)
.get('/post', CheckToken, PostControllers.GetAllPostController)
.get('/post/:id', CheckToken, PostControllers.GetByIDPostController)
.delete('/post/:id', CheckToken, PostControllers.DeletePostController);

module.exports = { postRoutes };