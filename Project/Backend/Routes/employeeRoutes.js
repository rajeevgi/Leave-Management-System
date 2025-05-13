const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');
const verifyToken = require('../Middleware/Auth');

// Add User Profile
router.post('/addProfile',verifyToken, employeeController.addUserProfile);

// Find User By Id
router.get('/findUserById/:id',verifyToken, employeeController.getUserById);

// Find User By userId
router.get('/findUserByUserId/:userId',verifyToken, employeeController.getByUserId);

// Find All Users
router.get('/getAllUsers',verifyToken, employeeController.getAll);

module.exports = router;