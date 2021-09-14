import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { Link } from "react-router-dom";

type FormProps = {
  isSignUp: boolean;
};

const FormFormik: React.FC<FormProps> = ({ isSignUp }) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address.")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Password is required."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <Search>
            <MdEmail className="input_icon" />
            <Field
              name="email"
              type="email"
              className="input_form"
              placeholder="Enter your email"
            />
          </Search>
          <p className="error_message">
            <ErrorMessage name="email" className="error_message" />
          </p>

          <Search>
            <RiLockPasswordFill className="input_icon" />
            <Field
              name="password"
              type="password"
              className="input_form"
              placeholder="Enter your password"
            />
          </Search>
          <p className="error_message">
            <ErrorMessage name="password" />
          </p>

          {isSignUp ? null : (
            <Link to="#" className="fortgottenPassword">
              Forgotten password?
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
    background: #1b998b;
    color: #f2f4f3;
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
    color: grey;
    border: 1px solid grey;
    transition: all 0.2s;
    font-family: "Saira", sans-serif;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: #f2f4f3;
    }

    &:focus {
      outline: none;
      border-bottom: 3px solid #1b998b;
      border-left: 3px solid #1b998b;
    }

    &:focus::placeholder {
      color: #f2f4f3;
    }
  }

  .error_message {
    color: white;
    font-size: 1rem;
    padding: 0rem 1rem;
    display: inline;
    transition: all 0.5s;
  }

  .input_icon {
    color: #f2f4f3;
    height: 1.4rem;
    width: 1.4rem;
    position: absolute;
    margin-left: 1rem;
  }

  .fortgottenPassword {
    text-align: center;
    text-decoration: none;
    color: grey;
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
