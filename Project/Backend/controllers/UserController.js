const User = require("../Models/User");

exports.createUser = (req, res) => {
  const Userdata = req.body;

  User.create(Userdata, (err, result) => {
    if (err) return res.status(500).json({ error: "Failed To Create User!" });

    res
      .status(201)
      .json({ message: "User Registered Successfully...", result });
  });
};

exports.findUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id, (err, result) => {
    if (err)
      return res.status(500).json({ error: "Failed To Fetch User Data!" });

    res.status(201).json({ message: "User Find Successfully...", result });
  });
};

exports.findUserByEmail = (req, res) => {
  const { email } = req.params;

  User.findByEmail(email, (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Failed To Fetch User with email!" });

    res.status(201).json({ message: "User Find Successfully...", result });
  });
};


exports.getAllUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err)
      return res.status(500).json({ error: "Failed To Fetch All Users!" });

    res.status(201).json({ message: "List Of Users: ", results });
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.deleteUser(id, (err, result) => {
    if (err) return res.status(500).json({ error: "Failed To Delete User!" });

    res.status(201).json({ message: "User Deleted Successfully...", result });
  });
};