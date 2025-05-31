
# 🏢 Leave Management System (LMS)

A full-stack **Leave Management System** built with **Angular v18**, **TailwindCSS**, **Node.js**, **Express.js**, and **MySQL**. It manages employee leave workflows with secure role-based access, profile management, and email notifications.

---

## ✨ Features

### 👤 Authentication & Authorization
- Secure Login & Registration
- Role-based Access Control: **Admin**, **Employee**
- JWT Token stored in **session storage**

### 🧑‍💼 User Roles
- **Admin**
  - Manage all users
  - Approve/Reject employee leaves
  - View all employee leave records
- **Employee**
  - Fill profile form
  - Apply for leave
  - View their leave history and status

### 📅 Leave Management
- Apply for leave
- View leave history
- Admin approval/rejection

### ✉️ Notifications
- Email notifications sent using **Nodemailer**

---

## 🧱 Tech Stack

| Layer     | Technology                             |
|-----------|----------------------------------------|
| Frontend  | Angular v18, TailwindCSS               |
| Backend   | Node.js, Express.js                    |
| Database  | MySQL                                  |
| Email     | Nodemailer                             |
| Auth      | JWT, Role-based Middleware             |

---

## 📁 Project Structure

### 🖥️ Frontend (`/LMS-APP`)

\`\`\`
src/
└── app/
    ├── auth/
    │   ├── login/
    │   └── register/
    ├── dashboard/
    │   ├── admin/
    │   │   ├── admin-dashboard/
    │   │   └── employees/
    │   ├── dashboard-layout/
    │   └── employee/
    │       ├── apply-leave/
    │       ├── employee-dashboard/
    │       └── my-leaves/
    ├── home/
    ├── interceptors/
    |   ├── auth.interceptor.ts
    ├── layout/
    │   ├── footer/
    │   └── navbar/
    ├── shared/
    │   ├── guard/
    |       ├── auth.guard.ts  
    │   ├── model/
    |       ├── User.ts
    |       ├── Employee.ts
    |       ├── Leave.ts
    │   └── services/
    ├── app.routes.ts
    ├── app.config.ts
    └── ...
\`\`\`

---

### 🚀 Backend (`/api`)

\`\`\`
api/
├── controllers/
│   ├── AuthController.js
│   ├── EmployeeController.js
│   ├── LeaveController.js
│   └── UserController.js
├── Middleware/
│   └── Auth.js (JWT + Role-based Middleware)
├── routes/
│   ├── authRoutes.js
│   ├── employeeRoutes.js
│   ├── leaveRoutes.js
│   └── userRoutes.js
├── models/
|   ├── user.js
|   ├── employee.js
|   ├── leave.js
├── config/
│   └── db.js
└── server.js
\`\`\`

---

## 🔌 API Endpoints

### 🔐 Auth Routes (`/api/auth`)
| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| POST   | `/register`      | Register new user   |
| POST   | `/login`         | Login and get token |

---

### 👤 User Routes (`/api/users`)
| Method | Endpoint                    | Access       | Description                  |
|--------|-----------------------------|--------------|------------------------------|
| POST   | `/createUser`               | Admin        | Create a new user            |
| GET    | `/findUserById/:id`         | Admin/Emp    | Get user by DB id            |
| GET    | `/findUserByEmail/:email`   | Admin/Emp    | Get user by email            |
| GET    | `/getAllUsers`              | Admin        | Get all users                |
| PUT    | `/updateUser/:id`           | Admin        | Update user info             |
| DELETE | `/deleteUserById/:id`       | Admin        | Delete a user                |

---

### 👥 Employee Routes (`/api/employees`)
| Method | Endpoint                          | Access       | Description                    |
|--------|-----------------------------------|--------------|--------------------------------|
| POST   | `/addProfile`                     | Admin/Emp    | Add employee profile           |
| GET    | `/findUserById/:id`               | All Auth     | Get profile by DB id           |
| GET    | `/findUserByUserId/:userId`       | All Auth     | Get profile by `userId`        |
| GET    | `/getAllUsers`                    | Admin        | Get all profiles               |
| PUT    | `/updateUserProfile/:userId`      | Admin/Emp    | Update profile                 |
| DELETE | `/deleteUserProfile/:id`          | Admin/Emp    | Delete profile                 |

---

### 📅 Leave Routes (`/api/leaves`)
| Method | Endpoint                                 | Access     | Description                    |
|--------|------------------------------------------|------------|--------------------------------|
| POST   | `/applyLeave`                            | Employee   | Apply for leave                |
| GET    | `/getLeaveByEmployeeId/:employeeId`      | Admin/Emp  | Get leave by employee ID       |
| GET    | `/getAllLeaves`                          | Admin      | Get all leave applications     |
| PUT    | `/updateLeaveStatus/:leaveId`            | Admin      | Approve/Reject leave           |

---

## 🛡️ Security
- All routes are protected using **JWT token middleware**
- Roles are validated with `allowRoles('Admin')`, `allowRoles('Employee')` etc.
- Tokens are stored in **session storage** in the frontend

---

## 📧 Email Notifications
- Sent via **Nodemailer** on:
  - Leave Application
  - Leave Approval or Rejection work in progress

---

## ✅ How to Run

### 1. Start Backend
\`\`\`bash
cd api
npm install
npm run dev
\`\`\`

### 2. Start Frontend
\`\`\`bash
cd LMS-APP
npm install
ng serve
\`\`\`

---

## 🙌 Author

**Rajeev Gupta** – [GitHub](https://github.com/rajeevgi)  
Leave Management System @2025
