const { AddPostController } = require('./addPostController');
const { GetAllPostController } = require('./getAllPostController');
const { GetByIDPostController } = require('./getByIDPostController');
const { UpdatePostController } = require('./updatePostController');
const { DeletePostController } = require('./deletePostController');
const { SearchPostController } = require('./searchPostController');

module.exports = { AddPostController, 
  GetAllPostController, 
  GetByIDPostController,
  UpdatePostController,
  DeletePostController,
  SearchPostController };