const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { verifyToken, allowRoles } = require('../Middleware/Auth');

// Create User
router.post('/createUser',verifyToken, allowRoles('Admin'), userController.createUser);

// Find User By Id
router.get('/findUserById/:id',verifyToken, allowRoles('Admin', 'Employee'), userController.findUserById);

// Find User By Email
router.get('/findUserByEmail/:email',verifyToken, allowRoles('Admin', 'Employee'), userController.findUserByEmail);

// List All Users
router.get('/getAllUsers',verifyToken, allowRoles('Admin'),  userController.getAllUsers);

// Delete A User
router.delete('/deleteUserById/:id',verifyToken, allowRoles('Admin'), userController.deleteUser);

// Update an user
router.put('/updateUser/:id', verifyToken, allowRoles('Admin'), userController.updateUser);

module.exports = router;