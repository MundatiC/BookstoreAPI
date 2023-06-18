--Used to get newly registered user
CREATE PROCEDURE getRegisteredUser
	@Name VARCHAR (255)
AS
BEGIN 
	SELECT M.MemberID,M.Name,M.Address,M.ContactNumber
	FROM Library.Members M
	WHERE M.Name=@Name
END;
