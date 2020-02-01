const express = require('express');

const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');

const app = express();

app.use(express.json());

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

