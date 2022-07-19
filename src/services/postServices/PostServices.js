const { AddPostService } = require('./addPostService');
const { GetAllPostService } = require('./getAllPostService');
const { GetByIDPostService } = require('./getByIDPostService');
const { UpdatePostService } = require('./updatePostService');
const { DeletePostService } = require('./deletePostService');

module.exports = { 
  AddPostService,
GetAllPostService,
GetByIDPostService, 
  UpdatePostService, 
  DeletePostService };