import React from 'react'
import {useState} from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from '../firebase-config';
import { Link } from 'react-router-dom';

const Onboarding = () => {

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        } catch(error){
            console.log(error.message)
        }
       
    }  
   
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider)
    }
    
    
    return(
        <div className='onboarding'>
        <div className='board'>
            <h3> Get Started</h3>
            <p>Email</p>
            <input placeholder='Enter your email' onChange={(event) => {
                setRegisterEmail(event.target.value)
            }}/>
            <p>Password</p>
            <input placeholder=' Create password'  onChange={(event) => {
                setRegisterPassword(event.target.value)
            }}/>
            <button onClick={register}> <Link to='/home'> Sign Up</Link></button>
            <Link to='/home'>  <button className='google' onClick={signInWithGoogle}> Sign in with google</button> </Link>
            <p> Already have an account? <Link to='/login'> Login</Link></p>
        </div>
        </div>
    )
}

export default Onboarding;