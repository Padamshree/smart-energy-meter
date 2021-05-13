import React from 'react';
import { signIn } from "../firebase";

function Login() {
    return (
        <div>
            <button className="login" onclick={signIn}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
                <span> Continue with Google </span>    
            </button>
        </div>
    );
}

export default Login;
