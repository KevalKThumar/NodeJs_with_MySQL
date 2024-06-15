const express = require('express');
const postRouter = require('./route/post.route');
const bodyParser = require('body-parser');
const userRouter = require('./route/user.route');
const imageRouter = require('./route/image.route');
const dotenv = require('dotenv');


dotenv.config('./.env');


const app = express();

app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/posts', postRouter);
app.use('/user',userRouter);
app.use('/image',imageRouter)
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = app;

