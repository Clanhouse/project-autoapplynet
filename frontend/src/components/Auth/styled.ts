import styled from "styled-components";
import { device } from "../../assets/styles/device";

export const AuthWrapper = styled.div`
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

    @media ${device.tablet} {
      min-height: 100vh;
      min-width: 100vw;
      /* justify-content: space-evenly; */
      border-radius: 0px;
      padding: 4rem 4rem;
    }

    .title {
      text-decoration: none;
      color: var(--text-color-primary);
    }

    h1 {
      text-align: center;
      font-size: 4rem;
      background: transparent;
      transition: all 0.2s;

      @media ${device.tablet} {
        font-size: 6rem;
      }

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

      @media ${device.tablet} {
        font-size: 2.5rem;
      }
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

export const Socials = styled.div`
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

export const FormWrapper = styled.div`
  @media ${device.tablet} {
    margin: 3rem 0rem;
  }

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

    @media ${device.tablet} {
      margin: 1rem 0rem;
    }

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

export const Search = styled.div`
  padding: 0.5rem;
  margin: 0.2rem;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  align-self: center;

  @media ${device.tablet} {
    margin: 1.5rem 0rem;
  }
`;
