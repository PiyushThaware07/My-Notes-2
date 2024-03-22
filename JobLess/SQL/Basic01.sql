-- create database college;
-- check database already exists or not 
create database if not exists college;
-- select database
use college;

-- show all the database
show databases;

-- create table
create table student(
id INT Primary key,
fname varchar(50),
lname varchar(50),
email varchar(50),
gender varchar(50)
);

-- show tables
show tables;

-- Opertions
-- 1. Inserting Data To Student Table
insert into student values(1,"Piyush","Thaware","Piyush@gmail.com","male");
insert into student values(2,"Shreyash","Thaware","Shreyash@gmail.com","male");
insert into student values(3,"Pankaj","Sharma","Pankaj@gmail.com","male");
insert into student values(4,"Akansha","Singh","Akansha@gmail.com","female");

-- ============================================================================ Inserting data into specifc column 
create table record(
id int primary key auto_increment,
fname varchar(50),
lname varchar(50)
);
insert into record (fname,lname) values("Piyush","Thaware");
insert into record (fname,lname) values("Shreyash","Thaware");
-- ================================================================================================================

-- 2. Reading Data From The Student Table
select * from student;

-- 3. drop tables : remove the entire table from database
-- drop table tableName;



-- ==================================================================================================================
-- 1. Create Database
CREATE DATABASE IF NOT EXISTS employee_record;

-- Select Database
USE employee_record;

-- 2. Create Table
CREATE TABLE IF NOT EXISTS record (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    salary INT
);

-- 3. Insert Records
INSERT INTO record (name, salary) VALUES ('Herik Sevak', 10000);
INSERT INTO record (name, salary) VALUES ('Pankaj Sharma', 30000);

-- 4. Display Records from Table
SELECT * FROM record;


-- ( UNIQUE )
-- CREATE TABLE temp1(
-- id INT UNIQUE
-- );
-- insert into temp1 values(101);
-- insert into temp1 values(102);
-- select * from temp1;


-- ( PRIMARY KEY )
create table temp2(
id int,
name varchar(50),
email varchar(100),
primary key(id,name)  -- now it may be possible id can be dublicate or name but combination of both is not possible
);
insert into temp2 values(1,"Piyush","Piyush@gmail.com");
-- insert into temp2 values(1,"Piyush","Piyush@gmail.com");  ERROR
insert into temp2 values(2,"Piyush","Piyush@gmail.com");

-- ( FOREIGN KEY )
create table temp3(
my_id int,
foreign key (my_id) references temp2(id)
);


create table employee(
emp_id int auto_increment primary key,
emp_name varchar(100),
emp_salary int default 50000
);
insert into employee (emp_name) values("Piyush");
insert into employee (emp_name,emp_salary) values("Shareyash",60000);
select * from employee;

create table city(
id int primary key,
city varchar(50),
age int,
constraint age_check CHECK (age>=18 and city="nagpur")
);
insert into city values(1,"nagpur",23);
insert into city values(2,"nagpur",13); -- Error Code: 3819. Check constraint 'age_check' is violated.





