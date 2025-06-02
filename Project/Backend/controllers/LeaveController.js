const Employee = require("../Models/Employee");
const Leave = require("../Models/Leave");

exports.applyLeave = (req, res) => {
  const userId = req.user.id; // It will take employee_id from employee table
  const { start_date, end_date, leave_type, reason } = req.body;

  Employee.findByUserId(userId, (err, employeeResult) => {
    if (err || employeeResult.length === 0) {
      return res
        .status(400)
        .json({ error: "Employee profile not found for user" });
    }

    const employee = employeeResult[0];
    const employee_id = employee.id; // employees.id

    const leaveData = {
      employee_id,
      start_date,
      end_date,
      leave_type,
      reason,
    };

    Leave.apply(leaveData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Failed To Apply leave!" });
      }

      res.status(201).json({ message: "Leave Applied Successfully", result });
    });
  });
};

exports.getLeavesByUserId = (req, res) => {
  const requestedUserId = parseInt(req.params.userId);
  const loggedInUserId = req.user.id;
  const role = req.user.role;

  // Employee: can only view their own leaves
  if (role === "Employee" && requestedUserId !== loggedInUserId) {
    return res.status(403).json({
      message: "Access Denied. You can only view your own leaves.",
    });
  }

  Leave.getByUserId(requestedUserId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch leaves." });
    }
    res.status(200).json(results);
  });
};


exports.getAllLeaves = (req, res) => {
  Leave.getAll((err, results) => {
    if (err)
      return res.status(500).json({ error: "Failed To Fetch All Leaves!" });

    res.json(results);
  });
};

exports.updateLeaveStatus = (req, res) => {
  const { leaveId } = req.params;
  const { status } = req.body;

  Leave.updateStatus(leaveId, status, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed To Update Leave Status!" });
    }

    res.status(200).json({ message: "Status Updated Sucessfully...", result });
  });
};
