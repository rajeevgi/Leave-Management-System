const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/LeaveController');
const { verifyToken, allowRoles } = require('../Middleware/Auth');

// Apply Leave
router.post('/applyLeave',verifyToken, allowRoles('Employee'), leaveController.applyLeave);

// Find Leave by Id
router.get('/getLeaveByEmployeeId/:employeeId',verifyToken, allowRoles('Admin', 'Employee'), leaveController.getLeavesByEmployeeId);

// Find All Leaves
router.get('/getAllLeaves',verifyToken, allowRoles('Admin'), leaveController.getAllLeaves);

// Update Leave Status
router.put('/updateLeaveStatus/:leaveId',verifyToken, allowRoles('Admin'), leaveController.updateLeaveStatus);

module.exports = router;