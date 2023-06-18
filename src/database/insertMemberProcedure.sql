CREATE PROCEDURE InsertMemberProcedure
  @Name VARCHAR(255),
  @Address VARCHAR(255),
  @ContactNumber VARCHAR(20),
  @Password VARCHAR(255)
AS
BEGIN
  SET NOCOUNT ON;

  INSERT INTO Library.Members (Name, Address, ContactNumber, Password)
  VALUES (@Name, @Address, @ContactNumber, @Password);
  
  SELECT * FROM Library.Members WHERE MemberID = SCOPE_IDENTITY();
END
