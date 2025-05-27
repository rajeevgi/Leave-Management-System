const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');
const { verifyToken, allowRoles } = require('../Middleware/Auth');

// Add User Profile
router.post('/addProfile',verifyToken, allowRoles('Admin', 'Employee'), employeeController.addUserProfile);

// Find User By Id
router.get('/findUserById/:id',verifyToken, employeeController.getUserById);

// Find User By userId
router.get('/findUserByUserId/:userId',verifyToken, employeeController.getByUserId);

// Find All Users
router.get('/getAllUsers',verifyToken,allowRoles('Admin'), employeeController.getAll);

// Delete User's Profile
router.delete('/deleteUserProfile/:id', verifyToken, allowRoles('Admin', 'Employee'), employeeController.deleteProfile);

// Update User's Profile
router.put('/updateUserProfile/:userId', verifyToken, allowRoles('Admin','Employee'), employeeController.updateProfile);

module.exports = router;