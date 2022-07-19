const { Op } = require('sequelize');
const Models = require('../../database/models');

async function SearchPostService(search) {
  const results = await Models.BlogPost.findAll({
    where: {
      [Op.or]: {
        title: {
          [Op.substring]: search,  
        },
        content: {
          [Op.substring]: search,
        },
      },      
    },
    include: [
      { model: Models.User, as: 'user' },
      { model: Models.Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return results;
}

module.exports = { SearchPostService };