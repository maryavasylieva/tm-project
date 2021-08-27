import { createTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createTheme" {
  interface ThemeOptions {}
}

const theme = createTheme({});

export default theme;
