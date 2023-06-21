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
  SELECT CASE WHEN @@ROWCOUNT > 0 THEN 1 ELSE 0 END AS ReturnStatus;
END
