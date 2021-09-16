import React, { useState } from "react";
import { Link } from "react-router-dom";

//STYLES
import styled from "styled-components";

//ICONS
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

import FormFormik from "./FormFormik";

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <Wrapper>
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
          <FcGoogle className="social-icon" />
          <ImFacebook2 className="social-icon" style={{ fill: "#3b5998" }} />
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gradient-primary);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    background: #171412;
    min-width: 25vw;
    min-height: 65vh;
    padding: 2rem 2rem;
    border-radius: 10px;
    box-shadow: 0rem 1.3rem 1rem rgba(0, 0, 0, 0.7);

    .title {
      text-decoration: none;
      color: var(--text-color-primary);
    }

    h1 {
      text-align: center;
      font-size: 4rem;
      background: transparent;
      transition: all 0.2s;

      &:hover {
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    h2 {
      text-align: center;
      color: var(--text-color-primary);
    }

    .paragraph {
      margin-top: 2rem;
      color: var(--text-color-primary);
      text-align: center;
    }

    .btn-switch {
      border: none;
      background: transparent;
      font-family: "Saira", sans-serif;
      color: var(--color-primary);
      font-size: 1rem;
      cursor: pointer;
      padding-left: 0.3rem;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0rem;

  .social-icon {
    height: 2.5rem;
    width: 2.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(-1px);
    }
  }
`;

export default Auth;
