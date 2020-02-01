const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
dotenv.config({ path: './config.env' });
//mongoose.connect();
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);



mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => {
        console.log('DB connection successful!!!');
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('App runnin');
});
app.use((req, res, next) => {
    console.log('Middleware');
    next();
});



app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.get('/', (req, res) => {
    res.status(200).render('base');
});

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);

app.listen(7000, () => {
    console.log('Listening');
});

const updateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }

});
const Update = mongoose.model('Updates', updateSchema);

const testUpdate = new Update({
    name: 'SS',
    rating: 4.2
});

testUpdate.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log('ERROR :', err);
});

module.exports = Update;