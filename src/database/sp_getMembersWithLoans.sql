CREATE PROCEDURE GetMembersWithLoansProcedure
AS
BEGIN
  SELECT DISTINCT M.*, B.Title BookTitle
  FROM Library.Members AS M
  INNER JOIN Library.Loans AS L ON M.MemberID = L.MemberID
  INNER JOIN Library.Books AS B ON L.BookID = B.BookID
   WHERE L.Status = 'Active';
END
