const db = require('../config/database');

const Leave = {
    apply: (data, callback) => {
        const sql = `
            Insert into leaves (employee_id, start_date, end_date, leave_type, reason, status)
            values (?,?,?,?,?, 'Pending')
        `;
        db.query(sql, [data.employee_id, data.start_date, data.end_date, data.leave_type, data.reason], callback);
    },

    getByEmployeeId: (employeeId, callback) => {
        const sql = 'Select * from leaves where employee_id = ? Order by created_at desc';
        db.query(sql,[employeeId], callback);
    }, 

    getAll: (callback) => {
        const sql = `
            Select l.*, e.name from leaves l 
            JOIN employees e ON l.employee_id = e.id
            order by l.created_at desc
        `;
        db.query(sql, callback);
    },

    updateStatus: (leaveId, status, callback) => {
        const sql = 'Update leaves Set status = ?, updated_at = NOW() where id = ?';
        db.query(sql, [status, leaveId], callback);
    }
};

module.exports = Leave;