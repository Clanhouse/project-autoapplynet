import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { MdEmail as EmailIcon } from "react-icons/md";
import {
  AiFillLock as LockIcon,
  AiFillUnlock as UnLockIcon,
} from "react-icons/ai";

import {
  FormikValidation,
  FormProps,
  InitialFormValue,
} from "./FormFormik.types";

import {FormWrapper, Search} from "./styled"

const FormFormik: React.FC<FormProps> = ({ isSignUp }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const initialValues: InitialFormValue = { email: "", password: "" };

  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};





export default FormFormik;
