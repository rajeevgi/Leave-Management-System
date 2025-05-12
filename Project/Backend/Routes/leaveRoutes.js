const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/LeaveController');

// Apply Leave
router.post('/applyLeave', leaveController.applyLeave);

// Find Leave by Id
router.get('/getLeaveByEmployeeId/:id', leaveController.getLeavesByEmployeeId);

// Find All Leaves
router.get('/getAllLeaves', leaveController.getAllLeaves);

// Update Leave Status
router.put('/updateLeaveStatus', leaveController.updateLeaveStatus);

module.exports = router;