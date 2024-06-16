const { use } = require('..');
const models = require('../models');
// test association
const test = async (req, res) => {
    /**
     * One to One: 1:1 a user have one profile or one email
     * One to Many: 1:n one user can have many posts
     * Many to Many: n:n 
     * Many to One: n:1
     */

    // one to one

    // const user = await models.User.findByPk(10, {
    //     include: [models.Post]
    // });

    // const post = await models.Post.findByPk(19, {
    //     include: [models.User]
    // });

    // one to many

    // const user = await models.User.findByPk(10, {
    //     include: [models.Post]
    // });

    const post = await models.Post.findByPk(19, {
        include: [models.Catagory]
    })

    res.status(200).json({ user: category });
}

module.exports = {
    test
}