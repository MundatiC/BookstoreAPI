CREATE PROCEDURE InsertBook
@Title varchar(255),
@Author varchar(255),
@PublicationYear INT,
@Status varchar(20)
AS
BEGIN
	INSERT INTO Library.Books(Title,Author,PublicationYear,Status)
	VALUES (@Title,@Author,@PublicationYear,@Status);

	SELECT * FROM Library.Books WHERE BookID = SCOPE_IDENTITY();
END;