const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

// Create
router.post('/createUser', employeeController.create);

// Find User By Id
router.get('/findUserById/:id', employeeController.getUserById);

// Find User By userId
router.get('/findUserByUserId/:id', employeeController.getByUserId);

// Find All Users
router.get('/getAllUsers', employeeController.getAll);

module.exports = router;