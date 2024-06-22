import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['gray-300']};
  }
  body {
    background-color: ${props => props.theme['gray-100']};
    color: ${props => props.theme['dark-gray']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  @media (max-width: 768px){
    html {
        font-size: 87.5%; /* Ou seja, 14 px 
                            fica: 16px - 100%
                                  14px - x    -> Resultado: 87.5% */
    }
  }
`;