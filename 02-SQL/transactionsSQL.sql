create table Product(
productID int identity(1, 1) primary key,
productName varchar(50) not null,
unitPrice money not null,
qtyAvailable smallint,
dateAdded date default getdate()
)
go
create table SalesProduct(
salesID smallint identity(1, 1) primary key,
productID int,
qtySold smallint,
dateSold date default getdate()
)


insert into Product(productName, unitPrice, qtyAvailable)
values('Dell Laptop', 799.99, 100),
('Dell Desktop', 1199.99, 90),
('Surface', 1499.99, 40)

select * from Product

insert into SalesProduct(productID, qtySold)
values(1, 10)

create proc sp_updateOnSold
@id int, @qtySold int
as
begin
	begin try
		begin transaction
			update Product
			set qtyAvailable = qtyAvailable - @qtySold
			where productID = @id

			insert into SalesProduct(productID, qtySold)
			values(@id, @qtySold)
		commit transaction
	end try

	begin catch
		rollback transaction
	end catch
end


exec sp_updateOnSold 1, 10
select * from Product
select * from SalesProduct