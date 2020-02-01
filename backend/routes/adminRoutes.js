const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

router.route('/').get(adminController.getAllAdminUpdates).post(adminController.createAdminUpdate);

module.exports = router;