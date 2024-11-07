-- Active: 1728482418860@@127.0.0.1@3306@demo
CREATE TABLE dept(
    DID INT,
    Dname VARCHAR(20),
    PRIMARY key(DID)
);
CREATE Table employee(EmpNO VARCHAR(20),
Ename VARCHAR(45),
Job VARCHAR(45),
salary int,
DID INT,
primary key(EmpNO),
Foreign Key(DID) REFERENCES dept(DID));
INSERT into dept values 
(20,'sales'),
(30,'marketing'),
(40,'computing');

insert into employee values
('E001','Tom','Clerk',40000,20),
('E002','Agaba','Manager',16000,30),
('E003','null','null',20000,20),
('E004','Timo','Clerk',40000,30),
('E005','Simon','Manager',60000,40);
create view view_d as select*from employee where DID='30';
create view view_e as select Job, AVG(salary) from employee group by Job ;
create view view_f as select * from employee where Ename like 'T%';
create view view_g as select * from employee ORDER BY Job DESC;
create view view_h as select Job , sum(salary) from employee group by Job;
Create view view_i as select EmpNo,Ename,Job,salary,DID, salary*1.12 as salary_increase from employee;
alter table dept add COLUMN location varchar(45);
alter table dept MODIFY Dname VARCHAR(50);