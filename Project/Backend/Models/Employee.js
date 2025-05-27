const db = require('../config/database');

const Employees = {
    createProfile: (data, callback) => {
        const sql = "Insert into employees (user_id, name, position, department) values (?,?,?,?)";
        db.query(sql, [data.user_id, data.name, data.position, data.department], callback);
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
    },
    
    updateProfile: (userId,data, callback) => {
        const sql = 'Update employees set name = ?, position = ?, department = ?, updated_at = NOW() where user_id = ?';
        db.query(sql,[data.name, data.position, data.department, userId], callback);
    },

    deleteProfile: (id, callback) => {
        const sql = 'Delete From employees where id = ?';
        db.query(sql,[id], callback);
    }
};

module.exports = Employees;