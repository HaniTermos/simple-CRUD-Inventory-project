const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories ORDER BY name");
  return rows;
}

async function getCategoryById(id) {
  const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [id]);
  return rows[0];
}

async function createNewCategory(name) {
  const { rows } = await pool.query("INSERT INTO categories (name) VALUES ($1) RETURNING *", [name]);
  return rows[0];
}

async function updateCategory(id, name) {
  const { rows } = await pool.query("UPDATE categories SET name = $1 WHERE id = $2 RETURNING *", [name, id]);
  return rows[0];
}

async function deleteCategory(id) {
  const { rows } = await pool.query("DELETE FROM categories WHERE id = $1 RETURNING *", [id]);
  return rows[0];
}

async function getAllItems() {
  const { rows } = await pool.query(`
    SELECT items.*, categories.name as category_name 
    FROM items 
    JOIN categories ON items.category_id = categories.id 
    ORDER BY items.name
  `);
  return rows;
}

async function getItemsByCategoryId(categoryId) {
  const { rows } = await pool.query(`
    SELECT items.*, categories.name as category_name 
    FROM items 
    JOIN categories ON items.category_id = categories.id 
    WHERE items.category_id = $1 
    ORDER BY items.name
  `, [categoryId]);
  return rows;
}

async function getItemById(id) {
  const { rows } = await pool.query(`
    SELECT items.*, categories.name as category_name 
    FROM items 
    JOIN categories ON items.category_id = categories.id 
    WHERE items.id = $1
  `, [id]);
  return rows[0];
}

async function createNewItem(itemData) {
  const { rows } = await pool.query(
    "INSERT INTO items (name, description, quantity, price, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [itemData.name, itemData.description, itemData.quantity, itemData.price, itemData.category_id]
  );
  return rows[0];
}

async function updateItem(id, itemData) {
  const { rows } = await pool.query(
    "UPDATE items SET name = $1, description = $2, quantity = $3, price = $4, category_id = $5 WHERE id = $6 RETURNING *",
    [itemData.name, itemData.description, itemData.quantity, itemData.price, itemData.category_id, id]
  );
  return rows[0];
}

async function deleteItem(id) {
  const { rows } = await pool.query("DELETE FROM items WHERE id = $1 RETURNING *", [id]);
  return rows[0];
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategory,
  deleteCategory,
  getAllItems,
  getItemsByCategoryId,
  getItemById,
  createNewItem,
  updateItem,
  deleteItem
};