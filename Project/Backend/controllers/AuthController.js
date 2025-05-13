const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/User");

exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;

  // Hashing Password
  const hashedPassword = await bcrypt.hash(password, 10);

  User.create(
    { username, email, password: hashedPassword, role },
    (err, result) => {
      if (err)
        return res.status(500).json({ message: "Internal Server Error!" });
      res.status(201).json({ message: "User registered Successfully...", result });
    }
  );
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, async (err, result) => {
    if (err || result.length === 0) {
      return res.status(401).json({ err: "Invalid email or password" });
    }
    const user = result[0];
    // Compare Hashed Password with original Password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ err: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ message:"User Login Successfully..", token, role: user.role, userId: user.id });
  });
};
