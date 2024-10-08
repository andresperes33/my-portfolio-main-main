import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow-y: auto;
    overflow-x: none;
    position: fixed;
  }

  #root {
    height: 100vh;
    width: 100vw;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Ubuntu", sans-serif;
    transition: all 0.3s linear;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`;

export default GlobalStyle;
