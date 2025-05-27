const Employee = require("../Models/Employee");

exports.addUserProfile = (req, res) => {
  const { user_id, name, position, department } = req.body;

  if (!user_id || !name || !position || !department) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const employee_data = { user_id, name, position, department };

  Employee.createProfile(employee_data, (err, result) => {
    if (err){
      return res.status(500).json({ error: "Failed To Add Employee!!!" });
    }

    res.status(200).json({ message: "Employee Registered Successfully...", result });
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
  const { userId } = req.params;
  Employee.findByUserId(userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed To Fetch Employee By userId!" });
    }

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

exports.updateProfile = (req, res) => {
  const { userId } = req.params;
  const { name, position, department } = req.body;

  const updatedData = { name, position, department };
  
  Employee.updateProfile(userId, updatedData,(err, result) => {
    if (err){
      return res.status(500).json({ message : "Failed to Update Profile! "});
    }

    res.status(201).json({ message : "Profile Updated Successfully...", result });
  });
}

exports.deleteProfile = ( req, res) => {
  const { id } = req.params;

  Employee.deleteProfile(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message : "Failed To delete User Profile! "});
    }

    res.status(201).json({ message : "User Profile Removed Successfully...", result});
  });
}