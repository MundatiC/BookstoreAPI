import React from 'react';

const SignIn = ({ toggleSignIn }) => {
    const handleSignUpClick = () => {
        toggleSignIn(false);
    };

    return (
        <div className="sign-up-form">
            <h1>Sign In</h1>
            <input type="email" placeholder="Email" className="input-box" />
            <input type="password" placeholder="Password" className="input-box" />
            <a href="#" className="forgot-password">
                Forgot your password?
            </a>
            <button className="sign-btn">Sign In</button>
            <p>
                Don't have an account?{' '}
                <a href="#" onClick={handleSignUpClick}>
                    Sign Up
                </a>
            </p>
        </div>
    );
};

export default SignIn;
