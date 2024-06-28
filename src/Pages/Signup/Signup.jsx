// src/SignupForm.js
import React, { useState } from 'react';
import './Signup.css';



function Signup() {
    const [emailOrMobile, setEmailOrMobile] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Signup Details:", emailOrMobile);
    };

    return (
        <div className="Signupmain">

            <img className='l' src='/l.png'/>
        <div className="Signup-container">
            
            <form onSubmit={handleSubmit} className="Signup-form">
                <input
                    type="text"
                    placeholder="Enter Email/Mobile number"
                    value={emailOrMobile}
                    onChange={e => setEmailOrMobile(e.target.value)}
                    className="Signup-input"
                    />
                <button type="submit" className="Signup-button">
                    Request OTP
                </button>
            </form>
            <div className="Signup-link-container">
                <p>Exixting User?  <a href="/Login">Log in</a></p>
            </div>
            
        </div>

        
        
                    </div>
    );
}

export default Signup;