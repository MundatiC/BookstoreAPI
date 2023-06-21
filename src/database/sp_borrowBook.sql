CREATE PROCEDURE BorrowBookProcedure
  @MemberID INT,
  @BookTitle VARCHAR(255)
AS
BEGIN
  -- Find the book ID based on the provided title
  DECLARE @BookID INT;
  SELECT @BookID = BookID
  FROM Library.Books
  WHERE Title = @BookTitle;

  -- Get the loan date and calculate the return date
  DECLARE @LoanDate DATE = GETDATE();
  DECLARE @ReturnDate DATE = DATEADD(DAY, 10, @LoanDate);

  -- Insert a new loan record into the Loans table
  INSERT INTO Library.Loans (BookID, MemberID, LoanDate, ReturnDate)
  VALUES (@BookID, @MemberID, @LoanDate, @ReturnDate);

  -- Return the borrowed book details for the specific member
  SELECT B.*, M.Name AS MemberName
  FROM Library.Books AS B
  JOIN Library.Members AS M ON M.MemberID = @MemberID
  WHERE B.BookID = @BookID;
END
