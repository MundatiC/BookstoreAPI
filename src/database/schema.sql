--Database Name: LibraryManagementSystem
CREATE SCHEMA Library;
GO
CREATE TABLE Library.Books (
  BookID INT IDENTITY(1,1) PRIMARY KEY,
  Title VARCHAR(255),
  Author VARCHAR(255),
  PublicationYear INT,
  Status VARCHAR(20)
);

-- Create the Members table
CREATE TABLE Library.Members (
  MemberID INT IDENTITY(1,1) PRIMARY KEY,
  Name VARCHAR(255),
  Address VARCHAR(255),
  ContactNumber VARCHAR(20)
);


-- Create the Loans table
CREATE TABLE Library.Loans (
  LoanID INT IDENTITY(1,1) PRIMARY KEY,
  BookID INT,
  MemberID INT,
  LoanDate DATE,
  ReturnDate DATE,
  FOREIGN KEY (BookID) REFERENCES Library.Books (BookID),
  FOREIGN KEY (MemberID) REFERENCES Library.Members (MemberID)
);

-- Insert some dummy data into the Books table
INSERT INTO Library.Books (Title, Author, PublicationYear, Status)
VALUES
  ('Atomic Minds', 'Author 1', 2020, 'Available'),
  ('Infinity', 'Author 2', 2018, 'Available'),
  ('Trinity', 'Author 3', 2019, 'Available');

-- Insert some dummy data into the Members table
INSERT INTO Library.Members (Name, Address, ContactNumber)
VALUES
  ('Caleb Mundati', '123 Main St', '+254115139737'),
  ('Lenny Mbugua', '456 Elm St', '+254701556297'),
  ('Sharon Muthoni', '789 Oak St', '+254709567897');

-- Insert some dummy data into the Loans table
INSERT INTO Library.Loans (BookID, MemberID, LoanDate, ReturnDate)
VALUES
  (1, 1, '2023-05-01', '2023-07-15'),
  (2, 1, '2023-05-10', '2023-06-01'),
  (3, 2, '2023-05-05', '2023-06-20');
