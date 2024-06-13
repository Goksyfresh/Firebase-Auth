import { auth } from "../firebase-config";
import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
const SignIn = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        } catch(error){
            console.log(error.message)
        }
    }

   

    return(
        <div className='onboarding'>
            <div className="board">
            <h3> Sign In</h3>
        <p>Email</p>
        <input placeholder='Email...'  onChange={(event) => {
            setLoginEmail(event.target.value)
        }}/>
         <p>Password</p>
        <input placeholder='Password...'  onChange={(event) => {
            setLoginPassword(event.target.value)
        }}/>
        <button onClick={login}> <Link to='/home'> Sign In</Link> </button>
      
            </div>
       
    </div>
    
    )
}

export default SignIn;