const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

const sendWelcomeEmail = async (email, username) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to Out Platform",
    html: `<h2>Hello, ${username}! </h2><p> Thank you for registering with us....</p>`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendWelcomeEmail };
