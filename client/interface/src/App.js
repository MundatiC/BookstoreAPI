import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AvailableBooks from "./components/AvailableBooks";
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
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={myRouter} />;
};

export default App;
