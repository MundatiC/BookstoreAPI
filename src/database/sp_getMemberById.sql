CREATE PROCEDURE GetMemberByIdProcedure
  @MemberID INT
AS
BEGIN
  SELECT * FROM Library.Members WHERE MemberID = @MemberID;
END
