import React from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import AvailableBooks from "./components/AvailableBooks";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import BookForm from "./components/BookForm";
import SingleBook from "./components/SingleBook";
import BorrowedBooks from "./components/BorrowedBooks";
import ReturnedBooks from "./components/ReturnedBooks";
import OverdueBooks from "./components/OverdueBooks";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// create Router,route
const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/availablebooks" element={<AvailableBooks />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/availablebooks/:id" element={<SingleBook />} />
      <Route path="/borrowed-books" element={<BorrowedBooks />} />
      <Route path="/returned-books" element={<ReturnedBooks />} />
      <Route path="/overdue-books" element={<OverdueBooks />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={myRouter} />;
};

export default App;
