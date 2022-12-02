import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #2F2E41;
    color: #fff;

    padding-bottom: 36px;
  }

  body, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }

  a {
      text-decoration: none;
      color: #fff;
    }

    button {
      cursor: pointer;
    }
`;
