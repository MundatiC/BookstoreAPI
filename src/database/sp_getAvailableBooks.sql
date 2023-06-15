CREATE PROCEDURE getAvailableBooks
AS
BEGIN
	SELECT * 
	FROM Library.Books
	WHERE Books.Status='Available'
END;