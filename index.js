const express = require('express');
const postRouter = require('./route/post.route');
const bodyParser = require('body-parser');
const userRouter = require('./route/user.route');


const app = express();

app.use(express.json());

app.use('/posts', postRouter);
app.use('/user',userRouter);
app.use(bodyParser.json());

console.log(process.env.JWT_SECRET)
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = app;

