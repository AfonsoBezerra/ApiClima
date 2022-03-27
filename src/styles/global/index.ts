import { createGlobalStyle } from 'styled-components';

export const ColorsStyles = createGlobalStyle`
  :root {
    --bg-page: ${(props) => props.theme.colors.white};
    --text: ${(props) => props.theme.colors.black};
  }
`;

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--bg-page);
    color: var(--text);
  }
  #__next {
    width: 100%;
    height: 100%;
  }
`;
