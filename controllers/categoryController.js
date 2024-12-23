const dbCategories = require("../db/categoryQueries");
const dbItems = require("../db/itemQueries");

const links = [
  { href: "/", text: "Home" },
  { href: "/items", text: "All Items" },
];

async function getAllCategories(req, res) {
  const categories = await dbCategories.getAllCategories();
  res.render("index", { categories: categories, links: links });
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
  res.render("createItem", { categoryID: req.params.categoryID });
}

async function createItemPost(req, res) {
  await dbItems.insertItem(
    req.params.categoryID,
    req.body.name,
    req.body.description,
    req.body.image_src
  );
  res.redirect("/category/" + req.params.categoryID);
}

async function getItemByID(req, res) {
console.log('ID received:', req.params.itemID);
  const category = await dbCategories.getCategoryByID(req.params.categoryID);
  const item = await dbItems.getItemByID(req.params.itemID);
  console.log('Item Image Source:', item.image_src);
  res.render("item", { category: category, item: item, categoryID: req.params.categoryID });
}

async function updateItemGet(req, res) {
  const category = await dbCategories.getCategoryByID(req.params.categoryID);
  const item = await dbItems.getItemByID(req.params.itemID);
  res.render("updateItem", { categoryID: req.params.categoryID, item: item });
}

async function updateItemPost(req, res) {
  await dbItems.updateItem(
    req.params.itemID,
    req.body.category_id,
    req.body.name,
    req.body.description,
    req.body.image_src
  );
  res.redirect(
    "/category/" + req.params.categoryID + "/item/" + req.params.itemID
  );
}

async function deleteItemPost(req, res) {
  await dbItems.deleteItem(req.params.itemID);
  res.redirect("/category/" + req.params.categoryID);
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
  createItemPost,
  getItemByID,
  updateItemGet,
  updateItemPost,
  deleteItemPost,
};
