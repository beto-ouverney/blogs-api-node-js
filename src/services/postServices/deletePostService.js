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
  console.log(id);
  console.log('TESTE');
  if (!post) {
    throw new CustomError(errorsSchema.postNotExist.status, errorsSchema.postNotExist.message);
  }
  const userId = await getUserId(token);
  console.log(post.userId);
  if (post.userId !== userId) {
    throw new CustomError(errorsSchema.notAuthorized.status, errorsSchema.notAuthorized.message);
  }
  await Models.BlogPost.destroy({ where: { id } });
}

module.exports = { DeletePostService };