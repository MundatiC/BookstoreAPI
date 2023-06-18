--A new column was added to Library.Members
CREATE PROCEDURE registerUser
@Name varchar(255),
@Address varchar(255),
@ContactNumber varchar(20),
@Password varchar(50)
AS
BEGIN
	INSERT INTO Library.Members(Name, Address, ContactNumber, Password)
	VALUES (@Name,@Address,@ContactNumber,@Password);
END;