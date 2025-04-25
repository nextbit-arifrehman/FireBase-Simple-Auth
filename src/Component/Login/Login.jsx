import React from 'react';
import{auth} from '../../firebase-js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const Login = () => {

const Gprovider = new GoogleAuthProvider();


const Logins = () => {
  console.log("Google Sign In Click");

 signInWithPopup(auth, Gprovider)
.then(result => {
console.log(result.user);
}).catch(error => {
console.log(error);
 })
 
};

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={Logins} className='btn btn-active' >Sign In With Google</button>
        </div>
    );
};

export default Login;