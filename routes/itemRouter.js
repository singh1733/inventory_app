const { Router } = require("express");
const itemRouter = Router();
const itemController = require("../controllers/itemController");

itemRouter.get("/",itemController.getAllItems);

itemRouter.get("/:itemID", itemController.getItemByID);

itemRouter.get("/create",itemController.createItemGet);
itemRouter.post("/create",itemController.createItemPost);

itemRouter.get("/:itemID/edit",itemController.updateItemGet);
itemRouter.post("/:itemID/edit",itemController.updateItemPost);

itemRouter.post("/:itemID/delete",itemController.deleteItemPost);



module.exports = itemRouter;
