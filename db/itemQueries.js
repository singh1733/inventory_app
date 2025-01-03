const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

async function insertItem(category_id, name, description, image_src) {
  await pool.query(
    "INSERT INTO items (category_id, name, description, image_src) VALUES ($1, $2, $3, $4)",
    [category_id, name, description, image_src]
  );
}

async function getItemByID(id) {
  const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
  return rows[0];
}

async function updateItem(id, category_id, name, description, image_src) {
  await pool.query(
    "UPDATE items SET category_id = $1, name = $2, description = $3, image_src = $4 WHERE id = $5",
    [category_id, name, description, image_src, id]
  );
}

async function deleteItem(id) {
  await pool.query("DELETE FROM items WHERE id = $1", [id]);
}

async function getItemCategory(id) {
  const { rows } = await pool.query(
    "SELECT * FROM categories JOIN items ON categories.id=items.category_id WHERE items.id=$1",
    [id]
  );
  return rows[0];
}

module.exports = {
  getAllItems,
  insertItem,
  getItemByID,
  updateItem,
  deleteItem,
  getItemCategory,
};
