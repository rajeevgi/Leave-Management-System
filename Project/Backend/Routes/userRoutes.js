const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const verifyToken = require('../Middleware/Auth');

// Create User
router.post('/createUser',verifyToken, userController.createUser);

// Find User By Id
router.get('/findUserById/:id',verifyToken, userController.findUserById);

// Find User By Email
router.get('/findUserByEmail/:email',verifyToken, userController.findUserByEmail);

// List All Users
router.get('/getAllUsers',verifyToken, userController.getAllUsers);

// Delete A User
router.delete('/deleteUserById/:id',verifyToken, userController.deleteUser);

module.exports = router;