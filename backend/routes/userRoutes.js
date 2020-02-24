const express = require('express');

const userController = require('../controllers/userControllers');
const authController = require('../controllers/authControllers');

//bring back the user router from appjs
const router = express.Router();

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.route('/').get(userController.getAllUsers);

module.exports = router;