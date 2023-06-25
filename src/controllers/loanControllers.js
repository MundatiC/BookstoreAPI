const mssql = require("mssql");
const config = require("../config/config");
const ejs = require("ejs");
const createMarkup = require("../utils/createMarkup");
const { tokenVerifier } = require("../utils/token");
const sendMail = require("../utils/sendMail");

async function borrowBook(req, res) {
  try {
    let user = req.user;
    console.log(user.MemberID);
    console.log(user.Name);
    const { bookID } = req.body;

    let sql = await mssql.connect(config);
    if (sql.connected) {
      const request = sql.request();
      request.input("MemberID", user.MemberID);
      request.input("BookID", bookID);
      try {
        let result = await request.execute("BorrowBookProcedure");
        if (result.recordset.length === 0) {
          res.json({
            success: false,
            message: "Member or book not found",
          });
        } else {
          res.json({
            success: true,
            message: "Book borrowed successfully",
            data: result.recordset[0],
          });
          const BookName = result.recordset[0].Title;
          // templating
          let html = await createMarkup("./src/views/borrow.ejs", {
            name: user.Name,
            text: `Thank you for borrowing ${BookName}, a book from BookstoreAPI. We have successfully processed your request. The book is now available for you to enjoy.\n\nPlease remember to return the book by the due date to avoid any late fees. If you have any questions or need assistance, feel free to contact our support team.\n\nHappy reading!\n\nThank you,\nThe BookstoreAPI Team`,
          });
          const message = {
            to: user.Email,
            from: process.env.EMAIL_USER,
            subject: "Book Borrowing from Bookstore API",
            html: html,
          };
          await sendMail(message);
        }
      } catch (error) {
        res.send(error.precedingErrors[0].originalError.info.message);
      }
    }
  } catch (error) {
    if (error.message.includes("token") || error.message.includes("invalid")) {
      res.status(403).json({
        success: false,
        message: "Login again",
      });
    } else if (error.message.includes("expired")) {
      res.status(403).json({
        success: false,
        message: "Token expired login again",
      });
    }
  }
}

async function returnBook(req, res) {
  try {
    const { bookID } = req.body;
    let user = req.user;
    console.log(user);

    let sql = await mssql.connect(config);
    if (sql.connected) {
      try {
        const request = sql.request();
        request.input("MemberID", user.MemberID);
        request.input("BookID", bookID);
        let result = await request.execute("ReturnBookProcedure");

        if (result.recordset.length === 0) {
          res.json({
            success: false,
            message:
              "Failed to return the book. Please check the provided information.",
          });
        } else {
          res.json({
            success: true,
            message: "Book returned successfully",
            result: result.recordset[0],
          });

          const BookName = result.recordset[0].Title;
          // templating
          let html = await createMarkup("./src/views/return.ejs", {
            name: user.Name,
            text: `Thank you for returning ${BookName},a book from BookstoreAPI. We have successfully processed your return. We hope you enjoyed reading the book and found it insightful.\n\nIf you have any further questions or need assistance, please feel free to reach out to our support team.\n\nThank you,\nThe BookstoreAPI Team`,
          });

          const message = {
            to: user.Email,
            from: process.env.EMAIL_USER,
            subject: "Book Return from Bookstore API",
            html: html,
          };
          await sendMail(message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    if (error.message.includes("token") || error.message.includes("invalid")) {
      res.status(403).json({
        success: false,
        message: "Login again",
      });
    } else if (error.message.includes("expired")) {
      res.status(403).json({
        success: false,
        message: "Token expired login again",
      });
    }
  }
}

module.exports = {
  borrowBook,
  returnBook,
};
