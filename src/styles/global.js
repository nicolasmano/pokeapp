import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Poppins',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased !important;

    overflow: hidden;
  }

  #root {
    position: relative;
  }

  a {
    text-decoration: none;
  }

`;
