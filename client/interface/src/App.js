import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AvailableBooks from "./components/AvailableBooks";

const App = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = (isSignIn) => {
    setSignIn(isSignIn);
  };

  return (
    <div className="container">
      {/*{signIn ? (
        <SignIn toggleSignIn={toggleSignIn} />
      ) : (
        <SignUp toggleSignIn={toggleSignIn} />
      )} */}
      <TopBar />
      <Navbar />
      <Home />
      <AvailableBooks />
    </div>
  );
};

export default App;
