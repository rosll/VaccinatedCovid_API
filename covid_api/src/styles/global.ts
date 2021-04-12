import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.png';

export default createGlobalStyle`
  * {
    outline: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #b3d1ff url(${background}) no-repeat 90% top;
  }

  body, button, input {
    font: 14px JetBrains Mono, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 80px 20px;
  }

  button {
    cursor: pointer;
  }
`;
