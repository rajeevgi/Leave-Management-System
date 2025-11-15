CREATE DATABASE IF NOT EXISTS LMS_DB;
USE LMS_DB;

CREATE TABLE IF NOT EXISTS Users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('Employee', 'Admin') NOT NULL DEFAULT 'Employee',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO Users (username, email, password, role) 
VALUES ('rajeevg29','rajeevg29@gmail.com', '12345', 'Admin');

CREATE TABLE IF NOT EXISTS Employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

INSERT INTO Employees (user_id, name, position, department) 
VALUES (1, 'Rajeev Gupta', 'Senior Developer', 'Development');

ALTER TABLE Employees AUTO_INCREMENT = 2;

CREATE TABLE IF NOT EXISTS leaves (
	id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    leave_type VARCHAR(255) NOT NULL,
    reason VARCHAR(255) NOT NULL,
    status ENUM('Approved','Pending','Not Approved') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES Employees(id) ON DELETE CASCADE
);
