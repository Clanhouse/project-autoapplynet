import React from "react";
import { useFormik } from "formik";
import { validate } from "./validation";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Auth = () => {
  const isSignUp = true;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        {/* <label htmlFor="email">Email</label> */}

        <Search>
          <MdEmail
            style={{ marginLeft: "1rem", position: "absolute" }}
            color="#f2f4f3"
            size="1.5em"
          />
          <SearchBar
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter your email"
          />
        </Search>
        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}

        {/* <label htmlFor="password">Password</label> */}
        <Search>
          <RiLockPasswordFill
            style={{ marginLeft: "1rem", position: "absolute" }}
            color="#f2f4f3"
            size="1.5em"
          />
          <SearchBar
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Enter your password"
          />
        </Search>
        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}

        {/* <label htmlFor="email">Confirm Password</label> */}
        {isSignUp && (
          <Search>
            <RiLockPasswordFill
              style={{ marginLeft: "1rem", position: "absolute" }}
              color="#f2f4f3"
              size="1.5em"
            />
            <SearchBar
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Confirm your password"
            />
          </Search>
        )}
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <Error>{formik.errors.confirmPassword}</Error>
        ) : null}

        <button type="submit" className="btn btn-form">
          Join now!
        </button>

        <div>
          <p>Or continue with these social profile</p>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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

  form {
    display: flex;
    flex-direction: column;
    background: #171412;
    width: 25%;
    height: 60%;
    padding: 2rem 2rem;
    border-radius: 10px;
    box-shadow: 0rem 1.3rem 1rem rgba(0, 0, 0, 0.7);

    .btn-form {
      border: none;
      padding: 0.9rem 4rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      background: #1b998b;
      color: white;
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
  }
`;

const Search = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  align-self: center;
`;

const SearchBar = styled.input`
  padding: 1rem 1rem 1rem 3.5rem;
  width: 100%;
  border-radius: 10px;
  border: none;
  background: #171412;
  color: grey;
  border: 1px solid grey;
  transition: all 0.2s;
  font-family: "Saira", sans-serif;

  &::placeholder {
    color: #f2f4f3;
  }

  &:focus {
    background: grey;
  }

  &:focus::placeholder {
    color: #f2f4f3;
  }
`;

const Error = styled.p`
  color: white;
  font-size: 1rem;
  text-align: left;
  padding: 0rem 1rem;
`;

export default Auth;
