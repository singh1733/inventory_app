const db = require("../db/categoryQueries");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("index", { categories: categories });
}

function createCategoryGet(req, res) {
  res.render("createCategory");
}

async function createCategoryPost(req, res) {
  await db.insertCategory(req.body.name);
  res.redirect("/");
}

async function getCategoryByID(req, res) {
  const category = await db.getCategoryByID(req.params.categoryID);
  res.render("category", { category: category });
}

async function updateCategoryGet(req, res) {
  const category = await db.getCategoryByID(req.params.categoryID);
  res.render("updateCategory", { category: category });
}

async function updateCategoryPost(req, res) {
  await db.updateCategory(req.params.categoryID, req.body.name);
  res.redirect("/");
}

async function deleteCategoryPost(req, res) {
    await db.deleteCategory(req.params.categoryID);
    res.redirect("/");
}

module.exports = {
  getAllCategories,
  createCategoryGet,
  createCategoryPost,
  getCategoryByID,
  updateCategoryGet,
  updateCategoryPost,
  deleteCategoryPost
};
