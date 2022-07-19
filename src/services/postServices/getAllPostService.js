const Models = require('../../database/models/index');

async function GetAllPostService() {
  const posts = await Models.BlogPost.findAll({
    include: [{
      model: Models.User, 
      as: 'user',
      attributes: { exclude: ['password'] },
    }, {
      model: Models.Category,
      as: 'categories',
    }],
  });
  return posts;
}

module.exports = { GetAllPostService };