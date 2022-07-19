const { AddPostService } = require('./addPostService');
const { GetAllPostService } = require('./getAllPostService');
const { GetByIDPostService } = require('./getByIDPostService');
const { UpdatePostService } = require('./updatePostService');
const { DeletePostService } = require('./deletePostService');
const { SearchPostService } = require('./searchPostService');

module.exports = { 
  AddPostService,
GetAllPostService,
GetByIDPostService, 
  UpdatePostService, 
  DeletePostService,
  SearchPostService };