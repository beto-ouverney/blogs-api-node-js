const Models = require('../../database/models');
const { CustomError } = require('../../helpers/CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');

async function GetByIDPostService(id) {
  const post = await Models.BlogPost.findOne({ where: { id },
    include: [{
      model: Models.User, 
      as: 'user',
      attributes: { exclude: ['password'] },
    }, {
      model: Models.Category,
      as: 'categories',
    }],
  });
  if (!post) {
    throw new CustomError(errorsSchema.postNotExist.status, errorsSchema.postNotExist.message);
  }
  return post;
}

module.exports = { GetByIDPostService };