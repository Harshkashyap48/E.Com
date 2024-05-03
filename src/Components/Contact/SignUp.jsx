import React, { useState } from 'react';
import './SignUp.css';
import SignUpImg from './Images/signup.jpg';

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000); 
  };
 

  return (
    <>
      <h1>Welcome! Join us and let's begin together.</h1>
      <div className='Underline'></div>
      <div className='signup'>
        <img src={SignUpImg} alt='Sign Up Image' />
        <div className="signup-container">
          <h2>Sign Up</h2>
          {isSubmitted ? (
            <div className="success-message">Account created successfully!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
