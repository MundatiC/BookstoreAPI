CREATE PROCEDURE InsertMemberProcedure
  @Name VARCHAR(255),
  @Address VARCHAR(255),
  @ContactNumber VARCHAR(20),
  @Email VARCHAR(255),
  @Password VARCHAR(255)
AS
BEGIN
  SELECT @@ROWCOUNT AS RowsAffected;

  INSERT INTO Library.Members (Name, Address, ContactNumber, Email, Password)
  VALUES (@Name, @Address, @ContactNumber, @Email, @Password);

  SELECT * FROM Library.Members WHERE MemberID = SCOPE_IDENTITY();
END
