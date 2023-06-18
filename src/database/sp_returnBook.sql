CREATE PROCEDURE ReturnBookProcedure
  @MemberName VARCHAR(255),
  @BookTitle VARCHAR(255)
AS
BEGIN
  -- Find the member ID based on the provided name
  DECLARE @MemberID INT;
  SELECT @MemberID = MemberID
  FROM Library.Members
  WHERE Name = @MemberName;

  -- Find the book ID based on the provided title
  DECLARE @BookID INT;
  SELECT @BookID = BookID
  FROM Library.Books
  WHERE Title = @BookTitle;

  -- Delete the loan record from the Loans table
  DELETE FROM Library.Loans
  WHERE BookID = @BookID
    AND MemberID = @MemberID;

  -- Return a flag indicating the success of the operation
  SELECT CASE WHEN @@ROWCOUNT > 0 THEN 1 ELSE 0 END AS ReturnStatus;
END