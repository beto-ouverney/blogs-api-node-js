const Models = require('../../database/models');
const { CustomError } = require('../../helpers/CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');
const { getUserID } = require('../../helpers/getUserID');

async function DeletePostService(id, token) {
  const post = await Models.BlogPost.findOne({ where: { id } });
  if (!post) {
    throw new CustomError(errorsSchema.postNotExist.status, errorsSchema.postNotExist.message);
  }
  const userId = await getUserID(token);
  console.log(post.userId);
  if (post.userId !== userId) {
    throw new CustomError(errorsSchema.notAuthorized.status, errorsSchema.notAuthorized.message);
  }
  await Models.BlogPost.destroy({ where: { id } });
}

module.exports = { DeletePostService };