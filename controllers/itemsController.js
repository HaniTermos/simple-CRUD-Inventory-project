const db = require("../config/db/queries");

async function getAllItems(req, res) {
  const items = await db.getAllItems();
  console.log("items: ", items);
  res.render("items/index", { items: items });
}

async function getItemById(req, res) {
  const { id } = req.params;
  const category = await db.getCategoryById(id);
  const item = await db.getItemById(id);
  res.render("items/show", { category, item });
}

async function createNewItemGet(req, res) {
  res.render("items/new", { categories: await db.getAllCategories(), query: req.query });
}

async function createNewItemPost(req, res) {
  const { name, description, quantity, price, category_id } = req.body;
  const item = { name, description, quantity, price, category_id };
  await db.createNewItem(item);
  res.redirect("/items");
}

async function updateItemGet(req, res) {
  const { id } = req.params;
  const item = await db.getItemById(id);
  const categories = await db.getAllCategories();
  res.render("items/edit", { item , categories});
}

async function updateItemPost(req, res) {
  const { id } = req.params;
  const { name, description, quantity, price, category_id } = req.body;
  const item = { name, description, quantity, price, category_id };
  await db.updateItem(id, item);
  res.redirect("/items");
}

async function deleteItemGet(req, res) {
  const { id } = req.params;
  const item = await db.getItemById(id);
  res.render("items/delete", { item });
}

async function deleteItemPost(req, res) {
  const { id } = req.params;
  await db.deleteItem(id);
  res.redirect("/items");
}

module.exports = {
  getAllItems,
  getItemById,
  createNewItemGet,
  createNewItemPost,
  updateItemGet,
  updateItemPost,
  deleteItemGet,
  deleteItemPost
};
