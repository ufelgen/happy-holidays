import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


    @font-face {
        font-family: Christmas;
        src: url("/fonts/MountainsofChristmas-Regular.ttf");
    }

    html,
    body {
        font-family: Christmas, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        max-width: 800px;
        background: linear-gradient(
    270deg,
    hsla(221, 100%, 86%, 1) 0%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: -moz-linear-gradient(
    270deg,
    hsla(221, 100%, 86%, 1) 0%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: -webkit-linear-gradient(
    270deg,
    hsla(221, 100%, 86%, 1) 0%,
    hsla(220, 78%, 29%, 1) 100%
  );
    }
    
    * {
        box-sizing: border-box;
        padding: 0;  
        margin: 0 auto; 
    }
`;

export default GlobalStyles;
