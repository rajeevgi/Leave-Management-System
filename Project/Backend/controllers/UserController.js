const User = require("../Models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { username, email, password: hashedPassword, role };

    User.create(userData, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ error: "Email already exists" });
        }
        return res.status(500).json({ error: "Failed to create user", details: err.message });
      }
      res.status(201).json({ message: "User Registered Successfully", result });
    });
  } catch (error) {
    return res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.findUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id, (err, result) => {
    if (err)
      return res.status(404).json({ error: "Failed To Fetch User Data!" });

    res.status(200).json({ message: "User Found...", result });
  });
};

exports.findUserByEmail = (req, res) => {
  const { email } = req.params;

  User.findByEmail(email, (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Failed To Fetch User with email!" });

    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User Found...", result });
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