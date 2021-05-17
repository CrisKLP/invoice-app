import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    font-family: 'Spartan', sans-serif;
    font-size: 1.2rem;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.body.bg};
  }

  p {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
  }
`;

export default GlobalStyle;
