const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Create User
router.post('/createUser', userController.createUser);

// Find User By Id
router.get('/findUserById/:id', userController.findUserById);

// Find User By Email
router.get('/findUserByEmail/:email', userController.findUserByEmail);

// List All Users
router.get('/getAllUsers', userController.getAllUsers);

// Delete A User
router.delete('/deleteUserById/:id', userController.deleteUser);

module.exports = router;