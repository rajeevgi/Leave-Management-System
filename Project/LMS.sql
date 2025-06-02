create database if not exists LMS_DB;
drop database LMS_DB;

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

insert into users (id, username, email, password, role) 
values (1,'rajeevg29','rajeevg29@gmail.com', '$2a$12$lbIv4V2N3hycTSIOABNUYux3u02Ziu67X56Sjs1qhwLsvcEXa5or2', 'Admin');

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

insert into employees (user_id, name, position, department) values (1, 'Rajeev Gupta', 'Senior Developer', 'Development');

ALTER TABLE Employees AUTO_INCREMENT = 1;

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

Select e.*, u.email from employees e JOIN users u ON e.user_id = u.id;

select * from users;
select * from employees;
select * from leaves;

delete from users where id = 26;

select l.employee_id, l.start_date, l.end_date,l.leave_type, l.reason, l.status,
l.created_at, l.updated_at from leaves l
left join 
employees e on
l.employee_id = e.user_id
where e.user_id = 2;