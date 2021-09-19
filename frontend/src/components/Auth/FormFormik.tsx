import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdEmail as EmailIcon } from "react-icons/md";
import {
  AiFillLock as LockIcon,
  AiFillUnlock as UnLockIcon,
} from "react-icons/ai";

//TYPES
import {
  FormikValidation,
  FormProps,
  InitialFormValue,
} from "./FormFormik.types";

const FormFormik: React.FC<FormProps> = ({ isSignUp }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const initialValues: InitialFormValue = { email: "", password: "" };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={FormikValidation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form" autoComplete="off">
          <Search>
            <EmailIcon className="input_icon" />
            <Field
              name="email"
              type="email"
              className="input_form"
              placeholder="Enter your email"
              autoComplete="new-password"
            />
          </Search>
          <p className="error_message">
            <ErrorMessage name="email" className="error_message" />
          </p>

          <Search>
            {isPasswordVisible ? (
              <UnLockIcon
                className="input_icon input_lock"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              />
            ) : (
              <LockIcon
                className="input_icon input_lock"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              />
            )}

            <Field
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              className="input_form"
              placeholder="Enter your password"
            />
          </Search>
          <p className="error_message">
            <ErrorMessage name="password" />
          </p>

          {isSignUp ? null : (
            <Link to="#" className="fortgottenPassword">
              Forgot password?
            </Link>
          )}

          <button type="submit" className="btn btn-form">
            {isSignUp ? "Join now!" : "Log in!"}
          </button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
  }

  .btn-form {
    border: none;
    padding: 0.9rem 4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: var(--color-primary);
    color: var(--text-color-primary);
    border-radius: 10px;
    font-size: 1rem;
    font-family: "Saira", sans-serif;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(-1px);
    }
  }

  .input_form {
    padding: 1rem 1rem 1rem 3.5rem;
    width: 100%;
    border-radius: 10px;
    border: none;
    background: #171412;
    color: var(--color-grey);
    border: 1px solid grey;
    transition: all 0.2s;
    font-family: "Saira", sans-serif;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: var(--text-color-primary);
    }

    &:focus {
      outline: none;
      border-bottom: 3px solid var(--color-primary);
      border-left: 3px solid var(--color-primary);
    }

    &:focus::placeholder {
      color: var(--text-color-primary);
    }
  }

  .error_message {
    color: var(--text-color-primary);
    font-size: 1rem;
    padding: 0rem 1rem;
    display: inline;
    transition: all 0.5s;
  }

  .input_icon {
    color: var(--text-color-primary);
    height: 1.4rem;
    width: 1.4rem;
    position: absolute;
    margin-left: 1rem;
  }

  .input_lock {
    cursor: pointer;
  }

  .fortgottenPassword {
    text-align: center;
    text-decoration: none;
    color: var(--color-grey);
  }
`;

const Search = styled.div`
  padding: 0.5rem;
  margin: 0.2rem;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  align-self: center;
`;

export default FormFormik;
