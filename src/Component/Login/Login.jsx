import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../../firebase-js';

const Login = () => {

const provider = new GoogleAuthProvider 

const Logins = () => {
  console.log("Google Sign In Click");

  signInWithPopup(auth, provider)
  .then(result =>{
console.log(result);
  })
  
 .catch(error => {
    console.log(error);
 });
 
};

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={Logins} className='btn btn-active' >Sign In With Google</button>
        </div>
    );
};

export default Login;