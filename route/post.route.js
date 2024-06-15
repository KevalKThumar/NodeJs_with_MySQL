const express = require("express");
const postController = require("../controller/post.controller");
const checkAuth = require("../middleware/checkauth");

const postRouter = express.Router();

postRouter.post("/add", checkAuth, postController.save);

postRouter.get("/get/:id", postController.show);

postRouter.get("/", postController.index);

postRouter.put("/update/:id", checkAuth, postController.update);

postRouter.delete("/delete/:id", checkAuth, postController.deletePost);

module.exports = postRouter;

