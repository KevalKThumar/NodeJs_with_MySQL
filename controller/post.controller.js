
const models = require('../models')
const save = (req, res) => {
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        catagoryId: req.body.catagory_id,
        userId: 1
    }

    models.Post.create(post).then((result) => {
        res.status(201).json({
            message: "post created successfully",
            post: result
        })
    }).catch((err) => {
        res.status(500).json({
            message: "oops! failed to create post",
            error: err
        })
    });

}


module.exports = {
    save
}