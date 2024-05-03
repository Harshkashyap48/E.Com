import React, { useState } from 'react';

import SignIn from './Contact/SignIn';
import SignUp from './Contact/SignUp';
import './Contact.css';

const Contact = () => {
  const [isSignIn, setIsSignIn] = useState(true); 

  const toggleView = () => {
    setIsSignIn((prev) => !prev);
    window.scrollTo(0, 0); 
  };
 
   
  

  return (
    <div className="layout">
     
      <div className="content">
        {isSignIn ? (
          <SignIn />
        ) : (
          <SignUp />
        )}
        <div className="toggle-view">
          <button onClick={toggleView}>
            {isSignIn ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
