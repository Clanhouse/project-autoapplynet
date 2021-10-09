import styled from "styled-components";
import { devices } from "../../assets/styles/devices";

export const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gradient-primary);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  overflow-x: hidden;

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

    @media ${devices.tablet} {
      min-height: 100vh;
      min-width: 100vw;
      border-radius: 0px;

      padding: 1rem 2rem;
    }

    @media ${devices.mobileL} {
      padding: 1rem 0.6rem;
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

      @media ${devices.tablet} {
        font-size: 5rem;
      }

      @media ${devices.mobileL} {
        font-size: 2.8rem;
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

      @media ${devices.tablet} {
        font-size: 2.3rem;
      }

      @media ${devices.mobileL} {
        font-size: 1.6rem;
      }
    }

    .paragraph {
      margin-top: 1.8rem;
      color: var(--text-color-primary);
      text-align: center;

      @media ${devices.tablet} {
        font-size: 1.6rem;
      }
    }

    .paragraph:last-child {
      margin-top: 0rem;
    }

    .btn-switch {
      border: none;
      background: transparent;
      font-family: "Saira", sans-serif;
      color: var(--color-primary);
      font-size: 1rem;
      cursor: pointer;
      padding-left: 0.4rem;

      @media ${devices.tablet} {
        font-size: 1.6rem;
      }
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0rem;

  .social-icon {
    height: 2.5rem;
    width: 2.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: all 0.2s;

    @media ${devices.tablet} {
      height: 4rem;
      width: 4rem;
    }

    &:hover {
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(-1px);
    }
  }
`;

export const FormWrapper = styled.div`
  @media ${devices.tablet} {
    margin: 1.4rem 0rem;
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

    @media ${devices.tablet} {
      margin: 1rem 0rem;
      padding: 1.1rem 4rem;
      font-size: 1.5rem;
    }

    @media ${devices.mobileL} {
      padding: 0.7rem 3.5rem;
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
    justify-content: center;

    @media ${devices.tablet} {
      height: 4.2rem;
      position: relative;
      font-size: 1.8rem;
    }

    @media ${devices.mobileL} {
      height: 3.5rem;
      font-size: 0.8rem;
      padding: 1rem 1rem 1rem 2.5rem;
    }

    &::placeholder {
      color: var(--text-color-primary);

      @media ${devices.tablet} {
        font-size: 1.7rem;
      }

      @media ${devices.mobileL} {
        font-size: 1.1rem;
      }
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

    @media ${devices.tablet} {
      font-size: 1.5rem;
    }

    @media ${devices.mobileL} {
      font-size: 1.2rem;
    }
  }

  .input_icon {
    color: var(--text-color-primary);
    height: 1.4rem;
    width: 1.4rem;
    position: absolute;
    margin-left: 1rem;

    @media ${devices.tablet} {
      height: 1.7rem;
      width: 1.7rem;
      position: absolute;
      z-index: 100;
    }

    @media ${devices.mobileL} {
      height: 1.3rem;
      width: 1.3rem;
    }
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

  @media ${devices.tablet} {
    margin: 1rem 0rem;
  }
`;
