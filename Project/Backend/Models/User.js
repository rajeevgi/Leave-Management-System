const db = require('../config/database');

const User = {
    create : (data, callback) => {
        const sql = "Insert into users (username, email, password, role) values (?,?,?,?)";
        db.query(sql, [data.username, data.email, data.password, data.role], callback);
    },

    findByEmail: (email, callback) => {
        const sql = "Select * from users where email = ?";
        db.query(sql, [email], callback);
    },

    findById: (id, callback) => {
        const sql = "Select * from users where id = ?";
        db.query(sql, [id], callback);
    },

    getAllUsers: (callback) => {
        const sql = "Select * from users";
        db.query(sql, callback);
    }
};

module.exports = User;