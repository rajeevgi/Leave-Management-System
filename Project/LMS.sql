create database if not exists LMS_DB;

use LMS_DB;

create table Users (
	id int primary key auto_increment,
    username varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    role enum('Employee', 'Admin') not null default 'Employee',
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

create table Employees (
	id int primary key auto_increment,
    user_id int not null,
    name varchar(255) not null,
    position varchar(255) not null,
    department varchar(255) not null,
    created_at timestamp  default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    FOREIGN key (user_id) references Users(id) on delete cascade
);

create table leaves (
	id int primary key auto_increment,
    employee_id int not null,
    start_date date not null,
    end_date date not null,
    leave_type varchar(255) not null,
    reason varchar(255) not null,
    status enum('Approved','Pending','Not Approved') default 'Pending',
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    foreign key (employee_id) references Employees(id) on delete cascade
);   

select * from users;
select * from employees;
select * from leaves;