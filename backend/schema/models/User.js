const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email.']
    },
    phoneNo: {
        type: Number,
        required: true,
        minlength: [10, 'Contact number is not correct'],
        maxlength: [10, 'Contact number is not correct'],
    },
    name: {
        type: String,
        required: true
    }

});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

});

const User = mongoose.model('User', userSchema);
module.exports = User;