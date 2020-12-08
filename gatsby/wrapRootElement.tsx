import React from "react";
import { ThemeProvider } from 'styled-components';
import theme from "../src/styles/theme";
import GlobalState from "../src/state/index";
export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        {element}
      </GlobalState>
    </ThemeProvider>
  );
}