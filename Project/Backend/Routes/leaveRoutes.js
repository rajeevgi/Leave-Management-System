const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/LeaveController');
const verifyToken = require('../Middleware/Auth');

// Apply Leave
router.post('/applyLeave',verifyToken, leaveController.applyLeave);

// Find Leave by Id
router.get('/getLeaveByEmployeeId/:employeeId',verifyToken, leaveController.getLeavesByEmployeeId);

// Find All Leaves
router.get('/getAllLeaves',verifyToken, leaveController.getAllLeaves);

// Update Leave Status
router.put('/updateLeaveStatus/:leaveId',verifyToken, leaveController.updateLeaveStatus);

module.exports = router;