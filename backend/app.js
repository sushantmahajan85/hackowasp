const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(express.json());



dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

//mongoose connected

mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => {
        console.log('DB connection successful!!!');
    });

//listening to port 3000

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('App runnin');
});



app.use('/api/v1/user', userRouter);



app.listen(7000, () => {
    console.log('Listening');
});

