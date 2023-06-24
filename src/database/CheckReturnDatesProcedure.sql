CREATE PROCEDURE CheckReturnDates
AS
BEGIN
  SET NOCOUNT ON;

  DECLARE @Today DATE = GETDATE();

  SELECT
    DATEDIFF(DAY, @Today, L.ReturnDate) AS DaysRemaining,
    M.Email AS MemberEmail
  FROM
    Library.Loans AS L
    INNER JOIN Library.Members AS M ON L.MemberID = M.MemberID
  WHERE
    L.Status = 'Borrowed';
END
