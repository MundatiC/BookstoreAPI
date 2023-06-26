const express = require("express");
require("dotenv").config();
const cors = require("cors");

const returnReminder = require("./src/utils/returnReminder");

const bookRouter = require("./src/routes/bookRoutes");
const memberRouter = require("./src/routes/memberRoutes");
const loanRouter = require("./src/routes/loanRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

app.get(
  "/",
  (req, res, next) => {
    let cont = true;
    if (cont) {
      console.log("Hello from the middleware");
      next();
    } else {
      res.send("Error logged from middleware");
    }
  },

  (req, res) => {
    res.send("Ok");
  }
);

app.use(bookRouter, memberRouter, loanRouter);

app.use("*", (req, res, next) => {
  const error = new Error("Route Not found");
  next({
    status: 404,
    message: error.message,
  });
});

app.use((error, req, res, next) => {
  res.status(error.status).json(error.message);
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server on port: ${port}`));
