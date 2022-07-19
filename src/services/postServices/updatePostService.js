const Models = require('../../database/models');
const { CustomError } = require('../../helpers/CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');
const { VerifyToken } = require('../../helpers/token/verifyToken');

async function getUserId(token) {
  const credentials = await VerifyToken(token);
  return credentials.data.id;
}

function verifyFields(post) {
  if (!post.title) {
    throw new CustomError(errorsSchema.missingFields.status, errorsSchema.missingFields.message);
  }
  if (!post.content) {
    throw new CustomError(errorsSchema.missingFields.status,
       errorsSchema.missingFields.message);
  }
}
async function UpdatePostService(updatedPost, token, postId) {
  const userId = await getUserId(token);
  verifyFields(updatedPost);
  const post = await Models.BlogPost.findOne({ where: { id: postId } });
  if (post.userId !== userId) {
    throw new CustomError(errorsSchema.notAuthorized.status, errorsSchema.notAuthorized.message);
  }
  await Models.BlogPost.update(
    { ...updatedPost, updated: Date(), 
    }, { where: { id: post.id } },
);
  const updatedPostR = await Models.BlogPost.findOne({ where: { id: post.id },
  include: [
    { model: Models.User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Models.Category, as: 'categories' },
  ] });
  return updatedPostR;
}

module.exports = { UpdatePostService };
