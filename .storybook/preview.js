import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from '../src/theme.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

export const decorators = [(Story) =>
  (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Story/>
    </ThemeProvider>)
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}