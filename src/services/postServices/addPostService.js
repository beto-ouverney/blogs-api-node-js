const Models = require('../../database/models');
const { CustomError } = require('../../helpers/CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');
const { VerifyToken } = require('../../helpers/token/verifyToken');

async function verifyFields(post) {
  if (!post.title || !post.content) {
    throw new CustomError(errorsSchema.misssingFields.status, errorsSchema.misssingFields.message);
  }
  const categories = await Models.Category.findAll({ where: { id: post.categoryIds } });
  const categoriesIds = categories.map((e) => e.dataValues.id);
  if (categoriesIds.length !== post.categoryIds.length) {
    throw new CustomError(errorsSchema.categoryNotFound.status,
       errorsSchema.categoryNotFound.message);
  }
}
async function getUserId(token) {
  const credentials = await VerifyToken(token);
  return credentials.data.id;
}
async function AddPostService(post, token) {
  await verifyFields(post);
  const userId = await getUserId(token);
  const newPost = { title: post.title,
    content: post.content,
    userId,
    updated: Date(),
    published: Date(),
  };
  const { dataValues: { id, updated, published } } = await Models.BlogPost.create(newPost);
  await Promise.all(post.categoryIds.map(async (e) => {
    await Models.PostCategory.create({
      postId: id, categoryId: e,
    });
  }));
  newPost.id = id; 
  newPost.published = published; 
  newPost.updated = updated;
  return newPost;
}

module.exports = { AddPostService };