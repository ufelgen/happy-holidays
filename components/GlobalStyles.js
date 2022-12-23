import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

        max-width: 800px;
        margin: 0 auto;
        height: 100%
    }
    
    * {
        box-sizing: border-box;
        padding: 0;        
        
    }
`;

export default GlobalStyles;
