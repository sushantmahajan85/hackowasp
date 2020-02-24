const jwt = require('jsonwebtoken');
const User = require('../schema/models/User');
const AppError = require('../utils/appError');

exports.signup = async (req, res, next) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRESIN });

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError('Please provide email and password', 400));
        }


        const token = '';
        res.status(200).json({
            status: 'success',
            token
        });
    }
    catch (error) {

    }
}