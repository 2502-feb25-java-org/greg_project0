--DDL: used to create, manipulate, or delete DB objects
--Create (database, table, views, stored procedures, functions)
--Alter (Db, table, SP, etc...)
--Drop (Db, table, SP, etc...)

/*
if DB_ID(N'Music') is not null
drop database Music;
go
create database Music;
go

alter database Music
modify name = MusicDb
*/


create table Artist (
	artistID int identity(1, 1) primary key,
	artistName varchar(50) not null,
	age smallint not null default 18,
	activeSince date,
	isAlive bit default 1
);
go
--Constraints: not null, unique, primary key, foreign key, default, check
--Multiplicity: 1 on 1, 1 to Many(*), Many to Many
create table Album(
	albumID int identity(1, 1) primary key,
	albumName varchar(max) not null,
	numOfSongs smallint,
	releaseDate date,
	artistID int not null,
		--references Artist(artistID)
	genreID varchar(50) null
		constraint FK_Album_Artist foreign key (artistID)
			references Music.Artist(artistID)
	on delete no action --or CASCADE
	on update cascade --or NO ACTION
);

create schema Music
alter schema Music
transfer dbo.Artist
--transfer dbo.Album

create schema Person
create table Person.Listeners (
	listenerID int identity(1, 1) not null,
	email varchar(50) null,
	communicationPreferences bit default 1,
	age int check(age >= 10 and age <= 110)
);

insert into Music.Artist
--values ('Rihanna', 40, '1980-01-01', 1)
values ('Demi Lovato', 20, '1995-01-01', 1)
select * from Music.Artist

insert into Music.Artist(age, artistName, isAlive, activeSince)
values (45, 'Enrique', 1, '1985-01-01'),
	(55, 'Rick Astley', 1, '1975-01-01'),
	(35, 'Priyanka Chopra', 1, '1999-01-01')
select * from Music.Artist


select *
into Artist_Archive
from Music.Artist
select * from Artist_Archive


update Music.Artist
set age = 37
where artistName = 'Priyanka Chopra'
select * from Music.Artist


delete from Music.Artist
where artistID = 4
select * from Music.Artist

truncate table Music.Artist --cannot work until Albums is deleted
drop table Music.Albums

insert into Music.Artist
(select artistName, age, activeSince, isAlive 
from Artist_Archive)