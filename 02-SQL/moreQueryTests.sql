--select '1' as 'col1', 
--'2' as 'col2' --aliasing columns

--Schema: grouping of tables of related types
sp_help 'HumanResources.Department'

select [DepartmentID], [Name], [GroupName], [ModifiedDate] from HumanResources.Department --[] are not necessary but good practice
select * from HumanResources.Department --not recommended for optimization reasons

create table #tempTable (
	[dept id] int not null)

	insert into #tempTable
	values (1)

	select [dept id] from #tempTable

--sp_help 'Production.Product'

select SCHEMA_NAME(schema_id) as 'schema', name
from sys.tables
order by 'schema'

select SCHEMA_NAME(schema_id) as 'schema', name
from sys.views
order by 'schema'

select BusinessEntityID,Name,AddressLine1+ ' '+AddressLine2,City+' '+City+' '+StateProvinceName+' '+PostalCode+
' '+CountryRegionName as Address from sales.vStoreWithAddresses

--sp_help 'Sales.SalesOrderDetail'

select sod.ProductID, sod.UnitPrice as p, sod.OrderQty as q, (sod.UnitPrice * sod.OrderQty) as Total
from Sales.SalesOrderDetail as sod --table aliases

--local variables
declare @name varchar(4);
set @name = 'Greg';
select @name as Name;

--locally created table
declare @table as table (
id int not null,
name varchar(4) null)

insert into @table
values(1, 'Greg')

select id, name from @table --to run this it must be run in a batch

select JobTitle, BusinessEntityID, HireDate from  [HumanResources].[Employee]
where (HireDate < '2009-05-14' and HireDate > '2009-01-12') and JobTitle = 'Research and Development Manager'

select JobTitle, BusinessEntityID, HireDate
from HumanResources.Employee
where JobTitle != 'Research and Development Manager' --both <> and != mean not or you could put not before JobTitle

select distinct (JobTitle)
from HumanResources.Employee

select AddressLine1, AddressLine2, City, StateProvinceID, PostalCode from [Person].[Address]
select count(distinct AddressLine2) from Person.Address --count will not include null values
select * from Person.Address
select count(*) from Person.Address

select * from HumanResources.Employee --returns all employees
select top(10) * from HumanResources.Employee --returns only first 10 rows
select top(50) percent * from HumanResources.Employee --returns first half of employees

select rate from HumanResources.EmployeePayHistory
order by rate desc

--returns second highest employee salary using subquery
select top(1) * from HumanResources.EmployeePayHistory
where Rate !=
	(select top(1) [Rate] from HumanResources.EmployeePayHistory
	order by Rate desc)
order by rate desc

--returns second lowest employee salary using subquery
select top(1) * from HumanResources.EmployeePayHistory
where Rate !=
	(select top(1) [Rate] from HumanResources.EmployeePayHistory
	order by Rate)
order by rate

--returns all employees who started on 2009-01-02
select top(2) with ties FirstName+' '+LastName as Name, Department, StartDate from [HumanResources].[vEmployeeDepartmentHistory]
where StartDate = '2009-01-02'
order by StartDate

--returns the first 2 employees who started on 2009-01-02
select top(2) FirstName+' '+LastName as Name, Department, StartDate from [HumanResources].[vEmployeeDepartmentHistory]
where StartDate = '2009-01-02'
order by StartDate

--returns all employees with ties to the date 2009-01-02
select top(2) with ties FirstName+' '+LastName as Name, Department, StartDate from [HumanResources].[vEmployeeDepartmentHistory]
where StartDate = '2009-01-02'
order by StartDate


--GROUP BY clause
select ProductID, OrderQty
from Sales.SalesOrderDetail
where ProductID = 779

select ProductID, sum(OrderQty) as totalQty from Sales.SalesOrderDetail
group by ProductID
order by ProductID

--Where vs Having
select ProductID, SpecialOfferID, sum(OrderQty) as totalByOrderQty
from Sales.SalesOrderDetail as sod
where OrderQty > 3 --Where can only be used for non-aggregates
--where sum(OrderQty) > 100
group by SpecialOfferID, ProductID
having sum(OrderQty) > 100 --Having is used for aggregating clauses like count or sum
order by SpecialOfferID, ProductID


--JOINS
select * from [Production].[Product] --504 rows
select * from [Sales].[SalesOrderDetail] --121317 rows

select p.ProductID, sod.SalesOrderDetailID, sod.CarrierTrackingNumber, sod.OrderQty
from Production.Product as p
inner join Sales.SalesOrderDetail as sod
on p.ProductID = sod.ProductID --121317 rows

select p.ProductID, sod.SalesOrderDetailID, sod.CarrierTrackingNumber, sod.OrderQty
from Production.Product as p
left join Sales.SalesOrderDetail as sod
on p.ProductID = sod.ProductID --121555 rows

select p.ProductID, sod.SalesOrderDetailID, sod.CarrierTrackingNumber, sod.OrderQty
from Production.Product as p
right join Sales.SalesOrderDetail as sod
on p.ProductID = sod.ProductID --121317 rows


--See the difference with nulls
select p.ProductID, sod.SalesOrderDetailID, sod.CarrierTrackingNumber, sod.OrderQty
from Production.Product as p
left join Sales.SalesOrderDetail as sod
on p.ProductID = sod.ProductID --238 rows
where sod.ProductID is null
order by sod.SalesOrderDetailID

--Predicate placement is ON which does take Null into account
select p.ProductID, sod.SalesOrderDetailID, sod.CarrierTrackingNumber, sod.OrderQty
from Production.Product as p
left join Sales.SalesOrderDetail as sod
on p.ProductID = sod.ProductID and --238 rows
	sod.OrderQty > 2
order by sod.SalesOrderDetailID --32418 rows

--Predicate placement is WHERE which does NOT take Null into account
select p.ProductID, sod.SalesOrderDetailID, sod.CarrierTrackingNumber, sod.OrderQty
from Production.Product as p
left join Sales.SalesOrderDetail as sod
on p.ProductID = sod.ProductID --238 rows
where sod.OrderQty > 2
order by sod.SalesOrderDetailID --32163 rows


--Cross Join -> multiplication of tables
select count(*) from HumanResources.Employee --290 rows
select count(*) from HumanResources.EmployeeDepartmentHistory --296 rows

select e.BusinessEntityID, edh.StartDate, e.JobTitle
from HumanResources.Employee as e
cross join HumanResources.EmployeeDepartmentHistory as edh --85840 rows

select (290 * 296) as Math --85840


--Self Join
select * from HumanResources.Employee

alter table HumanResources.Employee
add ManagerID int null
go

update HumanResources.Employee
set ManagerID = 1
where BusinessEntityID <> 1

select e.BusinessEntityID, m.JobTitle, e.ManagerID, e.HireDate
from HumanResources.Employee as e
join HumanResources.Employee as m
on e.ManagerID = m.ManagerID

--Clean up
alter table HumanResources.Employee
drop column ManagerID


--Union and Union All
select s1.ProductID, s1.UnitPrice from Sales.SalesOrderDetail as s1
where s1.ProductID between 1 and 799
union --757 rows (returns distinct values with no dupes)
select s2.ProductID, s2.UnitPrice from Sales.SalesOrderDetail as s2
where s2.ProductID between 800 and 1000

select s1.ProductID, s1.UnitPrice from Sales.SalesOrderDetail as s1
where s1.ProductID between 1 and 799
union all --121317 rows (returns all common values and allows dupes)
select s2.ProductID, s2.UnitPrice from Sales.SalesOrderDetail as s2
where s2.ProductID between 800 and 1000


--Intersect and Except
