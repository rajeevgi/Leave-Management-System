const db = require('../config/database');

const Employees = {
    create: (data, callback) => {
        const sql = "Insert into employees (user_id, name, department, position) values (?,?,?,?)";
        db.query(sql, [data.user_id, data.name, data.department, data.position], callback);
    },

    findById: (id, callback) => {
        const sql = "Select * from employees where id = ?";
        db.query(sql, [id], callback);
    },

    findByUserId: (userId, callback) => {
        const sql = 'Select * from employees where user_id = ?';
        db.query(sql, [userId], callback);
    },

    getAll: (callback) => {
        const sql = 'Select e.*, u.email from employees e JOIN users u ON e.user_id = u.id';
        db.query(sql, callback);
    } 
};

module.exports = Employees;