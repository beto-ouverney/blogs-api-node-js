const CategoryServices = require('../../services/categoryServices/CategoryServices');

async function AddCategoryController(req, res) {
  const category = req.body;
  const categoryAdded = await CategoryServices.AddCategoryService(category);
  res.status(201).json(categoryAdded);
}

module.exports = { AddCategoryController };