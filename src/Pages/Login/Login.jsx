// src/LoginForm.js
import React, { useState } from 'react';
import './Login.css';
import FooterComponent from '../../components/FooterComponent';

function Login() {
    const [emailOrMobile, setEmailOrMobile] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login Details:", emailOrMobile);
    };

    return (
        <div className="loginmain">

            <img className='l' src='/l.png'/>
        <div className="login-container">
            
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    placeholder="Enter Email/Mobile number"
                    value={emailOrMobile}
                    onChange={e => setEmailOrMobile(e.target.value)}
                    className="login-input"
                    />
                <button type="submit" className="login-button">
                    Request OTP
                </button>
            </form>
            <div className="login-link-container">
                <p>New to Flipkart? <a href="/Signup">Create an account</a></p>
            </div>
        </div>
                    </div>
    );
}

export default Login;