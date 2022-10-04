import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
      --primary-color: #4678de;
      --background-color: #CFE5E4;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        background: none;
        outline: none;
    }
    html{
        font-size: 62.5%
    }
    body{
        background-color: #CFE5E4;
    }
`;
