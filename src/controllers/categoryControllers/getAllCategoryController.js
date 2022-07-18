const CategoryServices = require('../../services/categoryServices/CategoryServices');

async function GetAllCategoryController(req, res) {
  const categories = await CategoryServices.GetAllCategoryService();
  res.status(200).json(categories);
}

module.exports = { GetAllCategoryController };