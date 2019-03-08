--Stored Procedure: functional programming in SQL
sp_help 'Music.Artist'
sp_rename 'Music.Albums', 'Album'
sp_helptext 'sp_rename'


create proc sp_getArtistDetailsByID
@id int
as
begin
select ar.artistName, ar.age, al.albumName, al.numOfSongs
from Music.Artist as ar
left join Music.Album as al
on ar.artistID = al.artistID
end

execute [dbo].[sp_getArtistDetailsByID] 1 --executes the procedure

sp_helptext '[dbo].[sp_getArtistDetailsByID]'

alter proc sp_getArtistDetailsByID
@id int --parameter being passed in
with encryption --will not allow sp_helptext to view definition
as
begin
select ar.artistName, ar.age, al.albumName, al.numOfSongs
from Music.Artist as ar
left join Music.Album as al
on ar.artistID = al.artistID --returns the table
end

select * from Music.Artist

create proc sp_getArtistCountByAge
@age int,
@count int out
as
begin
select @count = count(artistName)
from Music.Artist
where age > @age
end

declare @count int
exec sp_getArtistCountByAge 30, @count out
select @count


--SWITCH CONTEXT TO hadjiyaneAdventureWorksDb !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

--Functions
--Scalar Functions(1 input -> 1 output): string functions, datetime, Math
--Aggregate Functions: work on columns/rows like count or min
--Table valued functions
--UDF: User Defined Functions(scalar, multivalued function, Table-valued function)

select concat('hello', ' ', 'world')
select LOWER('HELLO')
select getdate()
select MONTH(getdate())
select SQUARE(9)

--UDF
create function getFullName
(@firstName varchar(50),
@lastName varchar(50))
returns varchar(100)
as
begin
	declare @name varchar(100)
	set @name = CONCAT(@firstName, ' ', @lastName)
	return @name
end

select [dbo].[getFullName] ('Greg', 'Hadjiyane')

create function getDob
(@dob date)
returns int
as
begin
declare @age int
set @age = datediff(year, @dob, getdate()) -
	case
		when( (month(@dob) > month(getdate())) or
			(month(@dob) = month(getdate()) and day(@dob) > day(getdate())) )
		then 1
		else 0
end
	return @age
end


select e.BusinessEntityID, e.HireDate, dbo.getDob(e.BirthDate) as age
from HumanResources.Employee as e
where dbo.getDob(e.BirthDate) > 30 and dbo.getDob(BirthDate) < 45 --Since we are in the AdventureWorksDb context, we can use BirthDate alone instead of e.BirthDate



--SWITCH CONTEXT TO MusicDb!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

--TRIGGERS: DML(insert, update, delete), DDL, Login Triggers
--After or For Trigger(insert, delete, or update)
--Instead Trigger(runs instead of the command specified)

insert into Music.Artist
--values('Katy Perry', 25, '01/01/2001', 1)
values('Jennifer Lopez', 45, '05/07/1995', 1)

select * from Music.Artist

create table tblAudit(
id int identity(1, 1) not null,
ModifiedDate date default getdate(),
msg varchar(max)
)

create trigger tr_tblArtist
on Music.Artist
for insert
as
begin
declare @id int
select @id = artistID from inserted --temp table
insert into tblAudit
values(GETDATE(), 'inserted by Greg')
end

select * from tblAudit

create trigger tr_tblArtist_update
on Music.Artist
for update
as
begin
declare @id int
select @id = artistID from inserted --temp table
insert into tblAudit
values(GETDATE(), 'inserted by Greg')
end