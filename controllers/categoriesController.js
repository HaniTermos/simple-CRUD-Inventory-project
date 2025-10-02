const db = require("../config/db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  console.log("categories: ", categories);
  res.render("categories/index", { categories: categories });
}

async function getCategoryById(req, res) {
  const { id } = req.params;
  const category = await db.getCategoryById(id);
  const items = await db.getItemsByCategoryId(id);
  res.render("categories/show", { category, items });
}
async function createNewCategoryGet(req, res) {
  const categories = await db.getAllCategories(); 
  res.render("categories/new", { categories: categories });
}

async function createNewCategoryPost(req, res) {
  const { category } = req.body;
  await db.createNewCategory(category);
  res.redirect("/categories");
}

async function updateCategoryGet(req, res) {
  const { id } = req.params;
  const category = await db.getCategoryById(id);
  res.render("categories/edit", { category });
}

async function updateCategoryPost(req, res) {
  const { id } = req.params;
  const { category } = req.body;
  await db.updateCategory(id, category);
  res.redirect("/categories");
}

async function deleteCategoryPost(req, res) {
  const { id } = req.params;
  await db.deleteCategory(id);
  res.redirect("/categories");
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createNewCategoryGet,
  createNewCategoryPost,
  updateCategoryGet,
  updateCategoryPost,
  deleteCategoryPost
};
