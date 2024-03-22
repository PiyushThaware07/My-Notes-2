CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE IF NOT EXISTS student(
rollno INT PRIMARY KEY auto_increment,
name VARCHAR(100),
marks INT NOT NULL,
grade VARCHAR(10),
city VARCHAR(50)
);

INSERT INTO student (name,marks,grade,city) VALUES
("Pankaj Sharma",78,"C","Nagpur"),
("Herik Sevak",76,"B","Rajastan"),
("Pawan Vaidya",79,"A","Pune"),
("Piyush Thaware",88,"A","Nagpur"),
("Shreyash Thaware",98,"B","Delhi"),
("Sahil Thaware",98,"C","Delhi"),
("Akansha Jain",67,"B","Mumbai");
-- SELECT ENTIRE TABLE ROWS & COLUMNS
SELECT * FROM student;
-- SELECT SPECIFIC COLUMNS OF A TABLE
SELECT name FROM student;
SELECT name,city FROM student;
-- DISTINCT : Show Unique values of a specific column as below
SELECT DISTINCT city FROM student;
-- Where Clause : To define some conditions
SELECT * FROM student WHERE marks<90 AND city="mumbai";
SELECT * FROM student WHERE marks+10>100;
SELECT * FROM student WHERE marks!=88;

SELECT * FROM student WHERE marks BETWEEN 70 AND 90;
SELECT * FROM student WHERE city IN ("delhi","mumbai");
SELECT * FROM student WHERE city NOT IN ("delhi","mumbai");

-- b. LIMIT CLAUSE
SELECT * FROM student WHERE marks>78 LIMIT 5;

-- c. ORDER BY CLAUSE
SELECT * FROM student ORDER BY marks ASC;
SELECT * FROM student ORDER BY marks DESC;
SELECT * FROM student ORDER BY city ASC;

-- Aggregate Function : Aggregate function perform a calculation on a set of values and return a single value.
-- 1. MAX()
SELECT MAX(marks) FROM student;
-- 2. MIN()
SELECT MIN(marks) FROM student;
-- 3. AVG()
SELECT AVG(marks) FROM student;
-- 4. COUNT()
SELECT COUNT(marks) FROM student;
-- 5. SUM()
SELECT SUM(marks) FROM student;


-- GROUP BY CLAUSE : GROUPS THE ROWS THAT HAVE SAME VALUES INTO SUMMARY OR RESULT ROWS, It collect data from multiple records and group the result by one or more column.
SELECT * FROM student;
-- FIND TOTAL NO OF STUDENTS FROM NAGPUR AND OTHER STATES;
SELECT city,name,count(name),avg(marks) FROM student GROUP BY city,name;

-- Find the avg marks in each city in ascending order.
SELECT city,AVG(marks),COUNT(rollno) FROM student GROUP BY city ORDER BY city ASC;

-- HAVING CLAUSE : Similar to Where Clause , it applies some condition on rows used when we want to apply any condition after grouping.
-- Count number of students in each city where max marks cross 90.
SELECT city,COUNT(rollno) FROM student GROUP BY city HAVING MAX(marks)>90;

SELECT DISTINCT city,name,count(name) FROM student 
WHERE grade = "A"
GROUP BY city
HAVING MAX(marks)>50;

-- UPDATE TABLE DATA
SELECT * FROM student;
UPDATE student 
SET name="Rohit Sharma",marks=34,grade="D",city="MIrzapur"
WHERE rollno=7;

-- EXAMPLE : 02
UPDATE student
SET marks=100
WHERE name="Piyush Thaware" AND rollno=4;

-- EXAMPLE : 03 --> Update every student marks by one
SET SQL_SAFE_UPDATES = 0;
UPDATE student
SET marks=marks+1;


-- DELETE : to delete an exisiting row
-- REMOVING DUBLICATE ROWS
DELETE FROM student
WHERE rollno BETWEEN 8 AND 27;
SELECT * FROM student;
-- TO REMOVE ALL THE ROWS FROM THE TABLE
DELETE FROM student;



