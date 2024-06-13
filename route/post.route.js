const express = require("express");
const postController = require("../controller/post.controller");

const postRouter = express.Router();

postRouter.get("/list", postController.save);

module.exports = postRouter;

