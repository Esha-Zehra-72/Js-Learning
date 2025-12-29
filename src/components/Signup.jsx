import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Signup = ({ isAuth }) => {
  const handleSignupWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      isAuth(true);
      cookies.set("auth-token", result.user.refreshToken);
      console.log("result = ", result.user.refreshToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="">
        <p>Sign up with the google to be continue...</p>
        <button onClick={handleSignupWithGoogle}>Signup with the google</button>
      </div>
    </>
  );
};

export default Signup;
