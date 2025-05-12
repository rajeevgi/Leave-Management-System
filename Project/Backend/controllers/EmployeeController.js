const Employee = require("../Models/Employee");

exports.create = (req, res) => {
  const data = req.body;

  Employee.create(data, (err, result) => {
    if (err)
      return res.status(500).json({ error: "Failed To Add Employee!!!" });

    res.status(201).json({ message: "Employee Registered Successfully...", result });
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;

  Employee.findById(id, (err, result) => {
    if (err)
      return res.status(500).json({ error: "Failed To Fetch Employee By Id!" });
    res.json(result[0]);
  });
};

exports.getByUserId = (req, res) => {
  const userId = req.params.userId;
  Employee.findById(userId, (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Failed To Fetch Employee By userId!" });
    res.json(result[0]);
  });
};

exports.getAll = (req, res) => {
  Employee.getAll((err, results) => {
    if (err)
      return res.status(500).json({ error: "Failed To Fetch Employees..." });
    res.status(201).json({ message: "List Of Employees are : ", results });
  });
};
