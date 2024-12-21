const { Router } = require("express");
const categoryRouter = Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get("/", categoryController.getAllCategories)

categoryRouter.get("/category/create", categoryController.createCategoryGet)
categoryRouter.post("/category/create", categoryController.createCategoryPost)

categoryRouter.get("/category/:categoryID", categoryController.getCategoryByID)

categoryRouter.get("/category/:categoryID/edit", categoryController.updateCategoryGet)
categoryRouter.post("/category/:categoryID/edit", categoryController.updateCategoryPost)

categoryRouter.post("/category/:categoryID/delete", categoryController.deleteCategoryPost)





module.exports = categoryRouter;
