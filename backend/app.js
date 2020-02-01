const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');

const app = express();
dotenv.config({ path: './config.env' });
mongoose.connect();
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

app.use(express.json());

mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(con => {
        console.log(con.connections);
        console.log('DB connection successful!!!');
    });

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

app.use((req, res, next) => {
    console.log('Middleware');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);

app.listen(7000, () => {
    console.log('Listening');
});

