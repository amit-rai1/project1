//users.js
const express = require('express');
const router = express.Router();

const userController =  require('../controller/userController');

// POST user registration data
router.post('/register', userController.createUser);
router.get('/getAllUsers', userController.getAllUsers);


module.exports = router;
