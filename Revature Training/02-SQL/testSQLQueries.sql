-- comment like this
--Author Greg Hadjiyane on 03/05/2019

--SELECT statement execution order
--from
--where
--group by
--having
--select
--order by

select * from SalesLT.Customer;

--only the comlumns we want
select FirstName, LastName
from SalesLT.Customer;

--only the colmuns I want AND only the rows I want
select FirstName, LastName
from SalesLT.Customer
where LastName = 'Adams';

--returns all last names from A to C
select FirstName, LastName
from SalesLT.Customer
where LastName >= 'A' and LastName < 'D'
order by LastName asc;

--returns 
select FirstName, LastName
from SalesLT.Customer
where LastName like '[AB]%';

--returns a count of all Adams
select COUNT(*) as 'AllAdams'
from SalesLT.Customer
where LastName = 'Adams';

--returns total number of product 779 ever ordered
select *
from SalesLT.SalesOrderDetail
where ProductID = 779;

select sum (OrderQty) as 'CountOrderQty'
from SalesLT.SalesOrderDetail
where ProductID = 779;

--returns all last names starting with A that have a duplicate
select count(FirstName) as [dupe-count], FirstName, LastName
from SalesLT.Customer
where LastName < 'B'
group by LastName, FirstName
having count(FirstName) > 1;


--SQL Info
--Creating an Alias from an existing type
/*
create type phonenum from nchar(12) not null;
declare @phone as phonenum = '123456789012';
select @phone;

drop type phonenum;
*/

--Cast and Convert
/*
select * from HR.Employees;
select cast (postalcode as decimal(10, 3)) from SalesLT.Customers;

select convert(decimal(10, 4), postalcode) from SalesLT.Customers;
*/

--Some Precedence
/*
declare @x as int = 4;
declare @y as decimal(10, 1) = 5;
select @x * 2;
select @x + @y;
*/

--RTRIM, LTRIM, and TRIM Demo
/*
declare @helloworld as nvarchar(50) = '                 .!Hello World!!!        .             '
select @helloworld as 'Original';
--select rtrim(@helloworld);
select ltrim(@helloworld) as 'ltrimmed';
select trim(@helloworld) as 'trimmed';
select trim('.H !' from @helloworld);
*/

--Left vs Right
/*
declare @hi as nvarchar(12) = 'Hello World!';
select left(@hi, 4);
select right(@hi, 5);
*/


--Len and Datalength
/*
declare @length_test as varchar(30) = 'Twelve chars ';
declare @length_test2 as varchar(30) = 'Twelve chars ';
select len(@length_test);
select len(@length_test2);
select DATALENGTH(@length_test);
select DATALENGTH(@length_test2);
*/


--Patindex - pattern's index
declare @mark as nvarchar(30) = 'Is Mark here?';
select PATINDEX('%Mark%', @mark);


--Replicate
select replicate('he', 6);

--Replace and Translate
declare @pets as nvarchar(30) = 'I pet the adorable dogs.';
select @pets;
select REPLACE(@pets, 'dog', 'cat');
select translate(@pets, 'dg', 'ct');


--Substring
select substring('Have a nice day!', 8, 4);


--Stuff
select stuff('I hate the weather outside.', 3, 4, 'like');

