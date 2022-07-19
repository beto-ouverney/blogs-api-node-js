const Models = require('../../database/models');
const { CustomError } = require('../../helpers/CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');
const { VerifyToken } = require('../../helpers/token/verifyToken');

async function getUserId(token) {
  const credentials = await VerifyToken(token);
  return credentials.data.id;
}

async function DeletePostService(id, token) {
  const post = await Models.BlogPost.findOne({ where: { id } });
  if (!post) {
    throw new CustomError(errorsSchema.postNotFound.status, errorsSchema.postNotFound.message);
  }
  const userId = await getUserId(token);
  if (post.userId !== userId) {
    throw new CustomError(errorsSchema.notAuthorized.status, errorsSchema.notAuthorized.message);
  }
  await Models.BlogPost.destroy({ where: { id } });
}

module.exports = { DeletePostService };