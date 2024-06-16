const express = require('express');
const postRouter = require('./route/post.route');
const bodyParser = require('body-parser');
const userRouter = require('./route/user.route');
const imageRouter = require('./route/image.route');
const dotenv = require('dotenv');
const { test } = require('./controller/test.contrroller');

// to create model :npx sequelize model:generate --name PostCategory --attributes postId:integer,categoryId:integer 
// for create the seed : npx sequelize-cli seed:generate --name category
dotenv.config('./.env');


const app = express();

app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/posts', postRouter);
app.use('/user',userRouter);
app.use('/image',imageRouter)
app.use(bodyParser.json());

app.get('/test',test)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = app;

