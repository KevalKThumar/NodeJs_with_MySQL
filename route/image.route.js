const express = require('express');
const imageController = require('../controller/image.controller');
const imageRouter = express.Router();
const checkAuth = require('../middleware/checkauth');
const upload = require('../helper/image-uploder');





imageRouter.post('/upload', checkAuth, upload.single('image'), imageController.uploadImage);
module.exports = imageRouter