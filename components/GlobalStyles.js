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
        height: 100%;
        background-color: black;
    }
    
    * {
        box-sizing: border-box;
        padding: 0;  
        margin: 0 auto;      
        
    }
`;

export default GlobalStyles;
