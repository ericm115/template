import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap'); */
  
  * {
    box-sizing: border-box;
  }
  
  html {
    height:100%;
  }

  body {
    //background: ${({ theme }) => theme.colors.primary};
    background: linear-gradient(${({ theme }) => theme.colors.tertiary}ff, ${({
  theme,
}) => theme.colors.tertiary}00);
    //color: hsl(192, 100%, 9%);
    font-family: 'Varela Round', sans-serif;
    font-size: 1.5em;
    margin: 0;
    padding: 0;
    background-attachment: fixed;
  }
`;

export default GlobalStyles;
