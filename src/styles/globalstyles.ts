import { createGlobalStyle } from "styled-components";

import { theme, Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`


 * {
  box-sizing: border-box;
 }

body {
  background-color: ${theme.colors["Dark-Blue"]};
  padding: 1.25rem;
  font-family: 'Manrope', sans-serif;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 0.1px);
  text-align: center;
}

.attribution {
        font-size: 11px;
        text-align: center;
        color: ${theme.colors["Light-Cyan"]};
      }
      .attribution a {
        color: ${theme.colors["Neon-Green"]};
      }

`;
