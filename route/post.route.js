const express = require("express");
const postController = require("../controller/post.controller");

const postRouter = express.Router();

postRouter.post("/add", postController.save);

postRouter.get("/get/:id", postController.show);   

postRouter.get("/", postController.index);

postRouter.put("/update/:id", postController.update);

postRouter.delete("/delete/:id", postController.deletePost);

module.exports = postRouter;

