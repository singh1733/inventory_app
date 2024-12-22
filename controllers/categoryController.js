const dbCategories = require("../db/categoryQueries");
const dbItems = require("../db/itemQueries");


async function getAllCategories(req, res) {
  const categories = await dbCategories.getAllCategories();
  res.render("index", { categories: categories });
}

function createCategoryGet(req, res) {
  res.render("createCategory");
}

async function createCategoryPost(req, res) {
  await dbCategories.insertCategory(req.body.name);
  res.redirect("/");
}

async function getCategoryByID(req, res) {
  const category = await dbCategories.getCategoryByID(req.params.categoryID);
  const items = await dbCategories.getCategoryItems(req.params.categoryID);
  res.render("category", { category: category, items: items });
}

async function updateCategoryGet(req, res) {
  const category = await dbCategories.getCategoryByID(req.params.categoryID);
  res.render("updateCategory", { category: category });
}

async function updateCategoryPost(req, res) {
  await dbCategories.updateCategory(req.params.categoryID, req.body.name);
  res.redirect("/");
}

async function deleteCategoryPost(req, res) {
  await dbCategories.deleteCategory(req.params.categoryID);
  res.redirect("/");
}

function createItemGet(req, res) {
    res.render("createItem", {categoryID: req.params.categoryID});
  }
  
  async function createItemPost(req, res) {
    await dbItems.insertItem(req.params.categoryID, req.body.name, req.body.description, req.body.image_src);
    res.redirect("/category/"+req.params.categoryID);
  }

module.exports = {
  getAllCategories,
  createCategoryGet,
  createCategoryPost,
  getCategoryByID,
  updateCategoryGet,
  updateCategoryPost,
  deleteCategoryPost,
  createItemGet,
  createItemPost
};
