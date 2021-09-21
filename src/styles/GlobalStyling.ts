import { createGlobalStyle } from "styled-components";
import { colors } from "..";
import { resetCss } from "./reset";

export const BiblioteksentralenBaseCss = createGlobalStyle`
  html {
    font-size: 112.5%;
    font-weight: 400;
    background-color: ${colors.basis4};
    color: ${colors.basis0};
  }
  
  body {
    font-family: 'Source Sans Pro', sans-serif;
    --action-color: ${colors.neptun1};
    --bg-color: ${colors.hvit};
    background-color: var(---bg-color);
  }
  
  *:focus {
    outline: none;
    box-shadow: 0 0 0 .2rem ${colors.gul1};
  }

  .sr-only {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  ${resetCss};
`;
