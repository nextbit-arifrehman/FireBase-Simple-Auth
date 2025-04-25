import React, { useState } from "react";
import { auth } from "../../firebase-js";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);

  const Gprovider = new GoogleAuthProvider();
const provider = new GithubAuthProvider();

  const Logins = () => {
    console.log("Google Sign In Click");

    signInWithPopup(auth, Gprovider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buttonGithub =() => {
    signInWithPopup(auth, provider).then(result => {
      setUser(result.user)
         console.log(result.user)
    }).catch(error => {
console.log(error)
    })
  }
  const loginsOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out succesful");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h2>Please Login</h2>


        {/* <button onClick={Logins} className="btn btn-active">
          Sign In With Google
        </button>

        <button onClick={loginsOut}>Sign Out</button>
         */}

        {/* below one is best according to me  */}




        {user ? (
          <button onClick={loginsOut}>Sign Out</button>
        ) : (
          <>
            <button onClick={Logins} className="btn btn-active">
              Sign In With Google
            </button>
            <button onClick={buttonGithub}>Sign In With Github</button>
          </>
        )}



        {/* conditional format is another way */}
        {user && (
          <>
            <h2>{user?.displayName}</h2>
            <h3>{user?.email}</h3>
            <img src={user.photoURL} alt="" />
          </>
        )}



        {/* optional chain one way of implement*/}
        {/* <h2>{user?.displayName}</h2>
          <h3>{user?.email}</h3> */}
      </div>

      <div></div>
    </>
  );
};

export default Login;
