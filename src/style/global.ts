import reset from "styled-reset";
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  ${reset};
  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    overflow-x: hidden;
  }

  * {
    font-family: sofia-pro,Roboto,Helvetica,Arial,sans-serif;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 300;
  }
`;

export default GlobalStyle;
