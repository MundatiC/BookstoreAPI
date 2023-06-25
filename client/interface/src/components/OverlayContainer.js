import React from 'react';

function OverlayContainer({ signIn, toggleSignIn }) {
    return (
        <div className={`overlay-container ${signIn !== true ? 'active' : ''}`}>
            <div className={`overlay ${signIn !== true ? 'active' : ''}`}>
                <div className={`overlay-panel ${signIn !== true ? 'active' : ''}`}>
                    <h1 className="title">Welcome Back!</h1>
                    <p className="paragraph">
                        To keep connected with us, please login with your personal info
                    </p>
                    <button className="ghost-button" onClick={() => toggleSignIn(true)}>
                        Sign In
                    </button>
                </div>

                <div className={`overlay-panel ${signIn !== true ? 'active' : ''}`}>
                    <h1 className="title">Hello, Friend!</h1>
                    <p className="paragraph">
                        Enter your personal details and start your journey with us
                    </p>
                    <button className="ghost-button" onClick={() => toggleSignIn(false)}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OverlayContainer;
