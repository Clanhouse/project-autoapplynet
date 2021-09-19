import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --color-primary: #1b998b;

  --text-color-primary: #f2f4f3;
  --color-grey: grey;
  --gradient-primary: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}

  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Saira', sans-serif;
  }

`;

export default GlobalStyle;
