CREATE PROCEDURE ReturnBookProcedure
  @MemberID INT,
  @BookID INT
AS
BEGIN
  -- Delete the loan record from the Loans table
  DELETE FROM Library.Loans
  WHERE BookID = @BookID
    AND MemberID = @MemberID;

  -- Return a flag indicating the success of the operation
  SELECT B.*, M.Name AS MemberName
  FROM Library.Books AS B
  JOIN Library.Members AS M ON M.MemberID = @MemberID
  WHERE B.BookID = @BookID;
END
