const leave = require("../Models/Leave");

exports.applyLeave = (req, res) => {
  const leaveData = req.body;

  leave.apply(leaveData, (err, result) => {
    if (err) return res.status(500).json({ error: "Failed To Apply leave!" });

    res.status(201).json({ message: "Leave Applied Successfully....", result });
  });
};

exports.getLeavesByEmployeeId = (req, res) => {
  const employeeId = req.params.employeeId;

  leave.getByEmployeeId(employeeId, (err, result) => {
    if (err){
      return res.status(500).json({ error: "Failed To Apply leave by Employee ID!" });
    }

    res.json(result[0]);
  });
};

exports.getAllLeaves = (req, res) => {
  leave.getAll((err, results) => {
    if (err)
      return res.status(500).json({ error: "Failed To Fetch All Leaves!" });

    res.json(results);
  });
};

exports.updateLeaveStatus = (req, res) => {
  const { leaveId } = req.params;
  const { status } = req.body;

  leave.updateStatus(leaveId,status, (err, result) => {
    if (err)
    {
      return res.status(500).json({ error: "Failed To Update Leave Status!" });
    }

    res.status(200).json({ message: "Status Updated Sucessfully...", result });
  });
};
