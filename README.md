
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
## 📷 Screenshots
![image](https://github.com/user-attachments/assets/8d3e49c8-c944-4b1d-ad0b-22ca0f059b36) - Login Page
![image](https://github.com/user-attachments/assets/394086ab-34e2-4763-b6ce-18736278d16f) - Register Page
![image](https://github.com/user-attachments/assets/55d8d017-8f01-4499-955e-4f7c151804d0) - Home Page/Landing Page
![image](https://github.com/user-attachments/assets/4f0b397f-5253-40f5-b6a2-a74a1c4850cb) - Admin Dashboard To Manage Users.
![image](https://github.com/user-attachments/assets/46d72378-0a78-4e00-88de-1c44271803b8) 
![image](https://github.com/user-attachments/assets/71fe235c-2576-4a66-93cd-a2ec4f7c624b) - Add User Form for Admin
![image](https://github.com/user-attachments/assets/20ca64d0-3c67-4c1c-830e-008a6d4d9d0f) - View User's Profile For Admin
![image](https://github.com/user-attachments/assets/891be82f-f5d6-4aa7-a455-9e6e529a9040) - Update User's Details By Admin
![image](https://github.com/user-attachments/assets/95f9bea9-2c94-47ad-971a-423a772775a6) - Leave Approval Page 
![image](https://github.com/user-attachments/assets/38e93650-2b96-4b92-854d-66f41e90118e) - User's Profile Page
![image](https://github.com/user-attachments/assets/6acd1fac-1263-4dc1-8aab-79b88a421f63) - Update User Profile By User
![image](https://github.com/user-attachments/assets/dc960e9c-4b35-499d-a552-7103b6897213) - Leave Apply Page
![image](https://github.com/user-attachments/assets/9f4e4524-3592-41ae-9720-c2a7226dfdce) - Check My-leaves Page For User

---

## 🙌 Author

**Rajeev Gupta** – [GitHub](https://github.com/rajeevgi)  
Leave Management System @2025
