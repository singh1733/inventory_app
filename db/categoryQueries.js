const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function insertCategory(name) {
  await pool.query("INSERT INTO categories (name) VALUES ($1)", [name]);
}

async function getCategoryByID(id) {
  const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function getCategoryItems(category_id) {
  const { rows } = await pool.query(
    "SELECT * FROM categories JOIN items ON categories.id=items.category_id WHERE categories.id=$1",
    [category_id]
  );
  return rows;
}

async function updateCategory(id, name) {
  await pool.query("UPDATE categories SET name = $1 WHERE id=$2", [
    name,
    id,
  ]);
}

async function deleteCategory(id) {
  await pool.query("DELETE FROM categories WHERE id = $1", [id]);
}

module.exports = {
  getAllCategories,
  insertCategory,
  getCategoryByID,
  getCategoryItems,
  updateCategory,
  deleteCategory,
};
