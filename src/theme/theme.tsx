import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
  interface ThemeOptions {
    root: {
      fontFamily: string;
    };
  }
}

const theme = createTheme({
  root: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
