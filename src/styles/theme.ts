import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff4a00',
    },
    secondary: {
      main: '#fca311',
    },
    background: {
      default: '#FAFAFA',
      paper: '#D8D8D8',
    },
    text: {
      primary: '#000000',
      secondary: '#121212',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '0.35px',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '0.35px',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});

export default lightTheme;
