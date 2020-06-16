import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/utils/themes'

const customViewports = {
  tablet: {
    name: "tablet",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
};

addParameters({
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...customViewports },
  },
});

addDecorator((storyFn) => (
  <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>
));
