const { Category } = require('../../database/models/index');
const { CustomError } = require('../../helpers/CustomError');
const { errorsSchema } = require('../../schemas/errorsSchema');

async function AddCategoryService(category) {
  if (!category.name) {
    throw new CustomError(errorsSchema.nameIsRequired.status, errorsSchema.nameIsRequired.message);
  }
  const newCategory = await Category.create(category);
  return newCategory;
}

module.exports = { AddCategoryService };