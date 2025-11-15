const db = require("../config/database");

const User = {
  create: (data, callback) => {
    const sql =
      `Insert into LMS_DB.Users (username, email, password, role) values (?,?,?,?)`;
    db.query(
      sql,
      [data.username, data.email, data.password, data.role],
      callback
    );
  },

  findByEmail: (email, callback) => {
    const sql = `Select * from LMS_DB.Users where email = ?`;
    db.query(sql, [email], callback);
  },

  findById: (id, callback) => {
    const sql = "Select * from LMS_DB.Users where id = ?";
    db.query(sql, [id], callback);
  },

  getAllUsers: (callback) => {
    const sql = "Select * from LMS_DB.Users";
    db.query(sql, callback);
  },

  deleteUser: (id, callback) => {
    const sql = "Delete From LMS_DB.Users Where id = ?";
    db.query(sql, [id], callback);
  },

  updateUser: (id, data, callback) => {
    const sql =
      "Update LMS_DB.Users set username = ?, email = ? , password = ? where id = ?";
    db.query(sql, [data.username, data.email, data.password, id], callback);
  },
};

module.exports = User;
