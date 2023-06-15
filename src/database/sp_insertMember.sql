CREATE PROCEDURE InsertMemberProcedure
  @Name VARCHAR(255),
  @Address VARCHAR(255),
  @ContactNumber VARCHAR(20)
AS
BEGIN
  SET NOCOUNT ON;

 

  INSERT INTO Library.Members (Name, Address, ContactNumber)
  VALUES (@Name, @Address, @ContactNumber);

  SELECT * FROM Library.Members WHERE MemberID = SCOPE_IDENTITY();
END
