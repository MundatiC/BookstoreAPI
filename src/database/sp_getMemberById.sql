CREATE PROCEDURE GetMemberByEmailProcedure
  @Email VARCHAR(255)
AS
BEGIN
  SELECT * FROM Library.Members WHERE Email = @Email;
END
