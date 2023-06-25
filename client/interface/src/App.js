import React, { useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const App = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = (isSignIn) => {
    setSignIn(isSignIn);
  };

  return (
    <div className="container">
      {signIn ? (
        <SignIn toggleSignIn={toggleSignIn} />
      ) : (
        <SignUp toggleSignIn={toggleSignIn} />
      )}
    </div>
  );
};

export default App;
