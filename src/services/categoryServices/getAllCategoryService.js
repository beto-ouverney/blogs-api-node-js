const { Category } = require('../../database/models/index');

async function GetAllCategoryService() {
  const categories = await Category.findAll();
  return categories;
}

module.exports = { GetAllCategoryService };