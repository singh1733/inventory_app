const { Router } = require("express");
const categoryRouter = Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get("/", categoryController.getAllCategories)

categoryRouter.get("/category/create", categoryController.createCategoryGet)
categoryRouter.post("/category/create", categoryController.createCategoryPost)



module.exports = categoryRouter;
