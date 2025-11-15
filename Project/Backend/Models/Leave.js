const db = require("../config/database");

const Leave = {
  apply: (data, callback) => {
    const sql = `
            Insert into LMS_DB.leaves (employee_id, start_date, end_date, leave_type, reason, status)
            values (?,?,?,?,?, 'Pending')
        `;
    db.query(
      sql,
      [
        data.employee_id,
        data.start_date,
        data.end_date,
        data.leave_type,
        data.reason,
      ],
      callback
    );
  },

  getByEmployeeId: (employeeId, callback) => {
    const sql =
      "Select * from LMS_DB.leaves where employee_id = ? Order by created_at desc";
    db.query(sql, [employeeId], callback);
  },

  getByUserId: (userId, callback) => {
    const sql = `
        SELECT l.employee_id, l.start_date, l.end_date, l.leave_type, l.reason, l.status,
               l.created_at, l.updated_at
        FROM LMS_DB.leaves l
        LEFT JOIN LMS_DB.employees e ON l.employee_id = e.user_id
        WHERE e.user_id = ?
        ORDER BY l.created_at DESC
    `;
    db.query(sql, [userId], callback);
  },

  getAll: (callback) => {
    const sql = `
            Select l.*, e.name from LMS_DB.leaves l 
            JOIN LMS_DB.employees e ON l.employee_id = e.id
            order by l.created_at desc
        `;
    db.query(sql, callback);
  },

  updateStatus: (leaveId, status, callback) => {
    const sql = "Update LMS_DB.leaves Set status = ?, updated_at = NOW() where id = ?";
    db.query(sql, [status, leaveId], callback);
  },
};

module.exports = Leave;
