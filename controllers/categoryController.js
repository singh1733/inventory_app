const db = require("../db/categoryQueries");

async function getAllCategories(req, res){
    const categories = await db.getAllCategories();
    res.render("index", {categories: categories});
}

async function createCategoryGet(req, res) {
    res.render("createCategory");
}

async function createCategoryPost(req, res) {
    await db.insertCategory(req.body.name);
    res.redirect("/");
}



module.exports = {
    getAllCategories,
    createCategoryGet,
    createCategoryPost
  };