import React, { useState } from "react";
import { Link } from "react-router-dom";


import { FcGoogle as GoogleIcon} from "react-icons/fc";
import { ImFacebook2 as FacebookIcon} from "react-icons/im";

import FormFormik from "./FormFormik";
import { Socials, AuthWrapper } from "./styled";

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <AuthWrapper>
      <div className="main">
        <h1>
          <Link to="/" className="title">
            autoApply
          </Link>
        </h1>
        <h2>{isSignUp ? "Create your account" : "Login into your account"}</h2>

        <FormFormik isSignUp={isSignUp} />

        <p className="paragraph">
          {isSignUp
            ? "Or continue with these social profile"
            : "Or login with these social profile"}
        </p>
        <Socials>
          <GoogleIcon className="social-icon" />
          <FacebookIcon className="social-icon" style={{ fill: "#3b5998" }} />
        </Socials>
        <p className="paragraph">
          {isSignUp ? "Already a member?" : "Don't have an account?"}
          <button
            className="btn-switch"
            onClick={() => setIsSignUp((prev) => !prev)}
          >
            {isSignUp ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </AuthWrapper>
  );
};


export default Auth;
