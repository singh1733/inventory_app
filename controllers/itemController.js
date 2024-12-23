const dbItems = require("../db/itemQueries");

const links = [
    { href: "/", text: "Home" },
    { href: "/items", text: "All Items" },
  ];

async function getAllItems(req, res) {
  const items = await dbItems.getAllItems();
  res.render("itemIndex", { items: items, categoryID: null, links: links });
}

function createItemGet(req, res) {
  res.render("createItem", { categoryID: null });
}

async function createItemPost(req, res) {
  await dbItems.insertItem(
    req.body.category_id,
    req.body.name,
    req.body.description,
    req.body.image_src
  );
  res.redirect("/items");
}

async function getItemByID(req, res) {
  const category = await dbItems.getItemCategory(req.params.itemID);
  const item = await dbItems.getItemByID(req.params.itemID);
  res.render("item", { category: category, item: item, categoryID: null });
}

async function updateItemGet(req, res) {
  const item = await dbItems.getItemByID(req.params.itemID);
  res.render("updateItem", { item: item, categoryID: null });
}

async function updateItemPost(req, res) {
  await dbItems.updateItem(
    req.params.itemID,
    req.body.category_id,
    req.body.name,
    req.body.description,
    req.body.image_src
  );
  res.redirect("/items/" + req.params.itemID);
}

async function deleteItemPost(req, res) {
  await dbItems.deleteItem(req.params.itemID);
  res.redirect("/items");
}

module.exports = {
  getAllItems,
  createItemGet,
  createItemPost,
  getItemByID,
  updateItemGet,
  updateItemPost,
  deleteItemPost,
};
