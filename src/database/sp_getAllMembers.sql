CREATE PROCEDURE getAllMembers
AS
BEGIN 
	SELECT M.MemberID,M.Name,M.Address,M.ContactNumber
	FROM Library.Members M
END;