
const models = require('../models')

const deletePost = (req, res) => {
    const id = req.params.id;
    const userId = 1;

    models.Post.destroy({
        where: {
            id: id, // column name: value
            userId: userId
        }
    }).then((result) => {
        if (!result) {
            return res.status(404).json({
                message: "post not found"
            })
        }
        res.status(200).json({
            message: "post deleted successfully",
        })
    }).catch((err) => {
        res.status(500).json({
            message: "oops! failed to delete post",
            error: err
        })
    });
}

const update = (req, res) => {
    const id = req.params.id;

    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        catagoryId: req.body.catagoryId,
    }
    const userId = 1;

    models.Post.update(updatedPost, {
        where: {
            id: id, // column name: value
            userId: userId
        }
    }).then((result) => {
        res.status(200).json({
            message: result == 0 ? "post not found" : "post updated successfully",
            post: result == 0 ? null : updatedPost
        })
    }).catch((err) => {
        res.status(500).json({
            message: "oops! failed to update post",
            error: err
        })
    });

}


const index = (req, res) => {
    models.Post.findAll().then((result) => {
        if (!result) {
            res.status(404).json({
                message: "post not found",
            })
        }
        res.status(200).json({
            message: "All post fetched successfully",
            post: result
        })
    }).catch((err) => {
        res.status(500).json({
            message: "oops! failed to fetch post",
            error: err
        })
    });
}

const save = (req, res) => {
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        catagoryId: req.body.catagoryId,
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

const show = (req, res) => {
    const id = req.params.id;
    // find by primary key
    models.Post.findByPk(id).then((result) => {
        if (!result) {
            res.status(404).json({
                message: "post not found",
            })
        }
        res.status(200).json({
            message: "post fetched successfully",
            post: result
        })
    }).catch((err) => {
        res.status(500).json({
            message: "oops! failed to fetch post",
            error: err
        })
    });

}


module.exports = {
    save,
    show,
    index,
    update,
    deletePost
}
