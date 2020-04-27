import React from "react";
import SignIn from "./../../components/sign-in/sign-in.component";
import SignUp from "./../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <h2 className="sign-in-and-sign-up-header">SIGN IN AND SIGN UP</h2>
      <div className="row">
        <div className="col-1-2">
          <SignIn />
        </div>
        <div className="col-1-2">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignInAndSignUp;
