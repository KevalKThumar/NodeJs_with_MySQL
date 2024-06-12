const express = require('express');
const postRouter = require('./route/post.route');

const app = express();

app.use(express.json());

app.use('/posts', postRouter)
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = app;