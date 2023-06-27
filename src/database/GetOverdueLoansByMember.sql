USE LibraryManagementSystem;
GO

CREATE OR ALTER PROCEDURE Library.GetOverdueLoansByMember
    @MemberID INT
AS
BEGIN
    SELECT B.*, M.MemberID, M.Name, dbo.CalculateOverdueDays(L.LoanID) AS OverdueDays
    FROM Library.Loans AS L
    JOIN Library.Books AS B ON L.BookID = B.BookID
    JOIN Library.Members AS M ON L.MemberID = M.MemberID
    WHERE L.ReturnDate < GETDATE()
        AND M.MemberID = @MemberID;
END;
